import React, { useState, useEffect } from "react";
import { useApiData } from "../Context";

const FoodCategories = () => {
  const { data, img_url } = useApiData();
  const menuCategories = data?.menu_sub_categories || [];
  const allMenus = data?.menus?.filter((it) => it.is_featured === 1) || [];

  const [activeCategory, setActiveCategory] = useState(
    menuCategories[0]?.id || ""
  );
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  useEffect(() => {
    const filtered = allMenus.filter(
      (menu) => menu.manu_subcategory_id === activeCategory
    );
    setFilteredItems(filtered);
  }, []);

  useEffect(() => {
    if (menuCategories.length > 0 && !activeCategory) {
      setActiveCategory(menuCategories[0].id);
    }
  }, [menuCategories]);

  return (
    <section className="about-food-section">
      <div className="container">
        <div className="about-food-wrapper style-2">
          <div className="section-title text-center">
            <span className="content-p">About Our Food</span>
            <h2>Hot Delicious Items</h2>
          </div>
          <ul className="d-flex justify-content-center align-items-center">
            {menuCategories.map((category) => (
              <li key={category.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryChange(category.id);
                  }}
                  className={
                    activeCategory === category.id ? "active-category" : ""
                  }
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="description-items">
          <div className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 gap-lg-3 mb-lg-2"
                  key={item.id}
                >
                  <div className="about-food-items card">
                    <div className="food-image" style={{ textAlign: "center" }}>
                      <img
                        src={img_url + item.image}
                        alt={item.name}
                        className="card-img-top"
                        style={{ width: "100%", height: "500px" }}
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
                        {item.name}
                      </p>
                      <p className="card-text">
                        Price: <strong>{item.sale_price} </strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">
                No items available for this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodCategories;
