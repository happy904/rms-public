import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ShopList.css";
import birayniImg from "../Assets/images/biryani-img.jpeg";
import { useApiData } from "../Components/Context";
const ShopListMainCards = ({ viewGridMode, filteredSubCategories }) => {
  const { img_url, data } = useApiData();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = data?.menus?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data?.menus?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="row">
        {currentProducts?.map((product) => {
          return viewGridMode ? (
            <div className="col-lg-12" key={product.id}>
              <div className="shop-list-items">
                <div className="shop-image">
                  <img src={product.image} width="100%" alt={product.name} />
                </div>
                <div className="shop-content">
                  <div className="star-p mb-2">
                    <p>{product.discount}</p>
                    <div className="star" style={{ color: "#FFB936" }}>
                      {[...Array(product.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      {[...Array(5 - product.rating)].map((_, i) => (
                        <FaStar
                          key={i + product.rating}
                          style={{ color: "#5c5c5b45" }}
                        />
                      ))}
                    </div>
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
                    src={product?.image ? img_url + product.image : ''}
                    alt={product.name}
                    className="card-img-top"
                    style={{ width: "100%", }}
                  />
                </div>
                <div className="food-content card-body">
                  <h5 className="card-title">
                    {/* <a href="#" className="text-decoration-none fs-6 text-center" style={{color:`var(--accent-color)`}}>{item.name}</a> */}
                  </h5>
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

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ShopListMainCards;
