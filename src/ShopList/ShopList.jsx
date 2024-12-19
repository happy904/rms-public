import React, { useState, useEffect } from "react";
import "./ShopList.css";
import { FaStar, FaAngleDown, FaTh, FaList } from "react-icons/fa";
import ShopListMainCards from "./ShopListMainCards";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import burger from "../Assets/images/burger-img-bg.png";
import { useApiData } from "../Components/Context";
import FastDelivery from "../Components/ContactUs/FastDelivery";

const ShopList = () => {
  const { data, img_url } = useApiData();
  const menuCategories = data?.menu_categories || [];
  const subCategories = data?.menu_sub_categories || [];
  const isFeatured = data?.menus?.is_featured || "No data";
  const [viewGridMode, setViewGridMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  console.log(selectedSubCategories);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const handleCheckboxChange = (subCategoryId) => {
    setSelectedSubCategories((prev) => {
      const updatedSubCategories = prev.includes(subCategoryId)
        ? prev.filter((id) => id !== subCategoryId)
        : [...prev, subCategoryId];

      return updatedSubCategories;
    });
  };

  const sortItems = (order) => {
    const sorted = [...menuCategories].sort((a, b) => {
      if (order === "asc") {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      } else {
        return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
      }
    });
    setSortedItems(sorted);
  };

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    sortItems(newSortOrder);
  };

  useEffect(() => {
    sortItems(sortOrder);
  }, [sortOrder]);
  return (
    <>
      <section
        className="food-category-section"
        style={{ backgroundColor: "rgb(235 208 149 / 64%)" }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 order-2 order-md-1 mt-5">
              <div className="main-sidebar style-1">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>Categories</h4>
                  </div>
                  <div className="widget-categories">
                    <ul>
                      {menuCategories.length > 0 ? (
                        menuCategories.map((category) => (
                          <li key={category.id}>
                            <div
                              className="category-item mb-2"
                              onClick={() => handleCategoryClick(category.id)}
                              style={{ cursor: "pointer" }}
                            >
                              {category.name}
                              <FaAngleDown
                                className={`dropdown-icon ${
                                  activeCategory === category.id ? "open" : ""
                                }`}
                                style={{ marginLeft: "10px" }}
                              />
                            </div>
                            {activeCategory === category.id && (
                              <ul className="subcategory-dropdown">
                                {subCategories
                                  .filter(
                                    (subCategory) =>
                                      subCategory.manu_category_id ===
                                      category.id
                                  )
                                  .map((subCategory) => (
                                    <div
                                      className="d-flex align-items-center"
                                      key={subCategory.id}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={selectedSubCategories.includes(
                                          subCategory.id
                                        )}
                                        onChange={() =>
                                          handleCheckboxChange(subCategory.id)
                                        }
                                        className="mb-0 me-2"
                                        style={{ marginTop: "-18px" }}
                                      />
                                      <li style={{ fontSize: "14px" }}>
                                        {subCategory.name}
                                      </li>
                                    </div>
                                  ))}
                              </ul>
                            )}
                          </li>
                        ))
                      ) : (
                        <li>No Category Found</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>New Arrival</h4>
                  </div>
                  {data?.menus?.length > 0 ? (
                    <div className="popular-food-posts">
                      {data.menus
                        .filter((item) => item.is_featured === 1)
                        .slice(0, 4)
                        .map((item) => (
                          <div className="single-post-item" key={item.id}>
                            <div className="thumb">
                              <img src={item.image || burger} alt={item.name} />
                            </div>
                            <div className="post-content">
                              <div
                                className="star"
                                style={{ color: "#FFB936" }}
                              >
                                {[...Array(4)].map((_, i) => (
                                  <FaStar key={i} />
                                ))}
                                <FaStar style={{ color: "#5c5c5b45" }} />
                              </div>
                              <h4>
                                {item.name}
                              </h4>
                              <div className="post-price">
                                <span className="theme-color-2">
                                  {item.sale_price}
                                </span>
                                {item.discount && (
                                  <span style={{ color: "var(--text)" }}>
                                    ${item.sale_price - item.discount}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p>No Featured Items</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-md-2">
              <div className="food-detail-wrapper">
                <div className="product-showing">
                  <h5>
                    Showing <span className="content-p">1–12 </span> of{" "}
                    {menuCategories.length}
                    results
                  </h5>
                </div>
                <div className="form-clt d-flex" style={{ gap: "25px" }}>
                  <h6>
                    Sort by:
                    <span style={{ color: "black" }} onClick={handleSortToggle}>
                      <HiMiniArrowsUpDown className="ms-1" />
                    </span>
                  </h6>
                  <div
                    onClick={() => setViewGridMode(!viewGridMode)}
                    className={`icon ${viewGridMode ? "gridActive" : ""}`}
                  >
                    <FaTh />
                  </div>
                  <div
                    onClick={() => setViewGridMode(!viewGridMode)}
                    className={`icon-2 ${!viewGridMode ? "gridActive" : ""}`}
                  >
                    <FaList />
                  </div>
                </div>
              </div>
              <ShopListMainCards
                viewGridMode={viewGridMode}
                selectedSubCategories={selectedSubCategories}
                sortedItems={sortedItems}
              />
            </div>
          </div>
        </div>
      </section>
      <FastDelivery />
    </>
  );
};

export default ShopList;
