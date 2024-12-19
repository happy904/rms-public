import React, { useState } from "react";
import "./ShopList.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { useApiData } from "../Components/Context";

const ShopListMainCards = ({ viewGridMode, selectedSubCategories }) => {
  const { img_url, data } = useApiData();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = selectedSubCategories?.length
    ? data?.menus?.filter((product) =>
        selectedSubCategories.includes(product.subCategoryId)
      )
    : data?.menus;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = filteredProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil((filteredProducts?.length || 0) / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="row mt-2">
        {currentProducts?.map((product) => {
          return viewGridMode ? (
            <div className="col-lg-12" key={product.id}>
              <div className="shop-list-items">
                <div className="shop-image">
                  <img src={product.image} width="100%" alt={product.name} />
                </div>
                <div className="shop-content">
                  <div className="star-p mb-2">
                    {/* <p>{product.discount}</p> */}
                  </div>
                  <h3>
                    <a className="list-a" href="">
                      {product.name}
                    </a>
                  </h3>
                  <p className="my-2" style={{ fontSize: "16px" }}>
                    {product.description}
                  </p>
                  <h5 className="content-p mt-0">{product.priceRange}</h5>
                  <div className="mt-4">
                    <a href="" className="btn-get-started">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="col-lg-4 col-md-6 col-sm-12 gap-lg-3 mb-lg-2"
              key={product.id}
            >
              <div className="about-food-items card">
                <div className="food-image" style={{ textAlign: "center" }}>
                  <img
                    src={product?.image ? img_url + product.image : ""}
                    alt={product.name}
                    className="card-img-top"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="food-content card-body">
                  <p
                    className="card-title card-text text-decoration-none fs-6 text-center"
                    style={{ color: `var(--accent-color)` }}
                  >
                    {product.name}
                  </p>
                  <p className="card-text">
                    Price: <strong>{product.sale_price} </strong>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        {totalPages > 1 && (
          <div className="pagination" style={{ display: "block" }}>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <MdKeyboardBackspace />
            </button>

            {(() => {
              const visiblePages = 4; 
              const pageNumbers = [];
              let startPage = Math.max(
                currentPage - Math.floor(visiblePages / 2),
                1
              );
              let endPage = Math.min(startPage + visiblePages - 1, totalPages);
              if (totalPages - startPage < visiblePages) {
                startPage = Math.max(totalPages - visiblePages + 1, 1);
              }

              for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
              }

              return pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={currentPage === pageNumber ? "active" : ""}
                >
                  {pageNumber}
                </button>
              ));
            })()}

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <MdKeyboardBackspace style={{ transform: "rotate(180deg)" }} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopListMainCards;
