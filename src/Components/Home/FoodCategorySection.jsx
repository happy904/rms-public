import React from 'react';
import burger from "../../Assets/images/beef-ruti.png";
import pasta from "../../Assets/images/pasta-2.png";
import pizza from "../../Assets/images/pizza-3.png";
import mainFood from "../../Assets/images/main-food-2.png";
import ruti from "../../Assets/images/ruti.png";
import grilled from "../../Assets/images/grilled-2.png";
import deliciousBurger from "../../Assets/images/delicious-burger.png";
import { FaHeart } from "react-icons/fa";

const foodItems = [
  {
    img: burger,
    name: "Ruti with Beef Slice",
    price: 30.52,
    discountedPrice: 28.52,
  },
  {
    img: pasta,
    name: "Pasta with Beef Slice",
    price: 30.52,
    discountedPrice: 28.52,
  },
  {
    img: ruti,
    name: "Grilled Chicken",
    price: 30.52,
    discountedPrice: 28.52,
  },
  {
    img: pizza,
    name: "Pizza with Beef Slice",
    price: 30.52,
    discountedPrice: 28.52,
  },
  {
    img: mainFood,
    name: "Grilled Chicken",
    price: 30.52,
    discountedPrice: 28.52,
  },
  {
    img: ruti,
    name: "Grilled Chicken",
    price: 30.52,
    discountedPrice: 28.52,
  },
  {
    img: grilled,
    name: "Grilled Chicken",
    price: 30.52,
    discountedPrice: 28.52,
  },
  {
    img: deliciousBurger,
    name: "Grilled Chicken",
    price: 30.52,
    discountedPrice: 28.52,
  },
];

const FoodCategorySection = () => {
  return (
    <div className="p-5" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="container">
        <div className="section-title text-center">
          <span className="content-p">crispy, every bite taste</span>
          <h2 style={{color: "var(--header)"}}>POPULAR FOOD ITEMS</h2>
        </div>

        <div className="row">
          {foodItems.map((item, index) => (
            <div key={index} className="col-lg-3 catagory-product-hover">
              <div className="catagory-product not-active">
                <div className="icon">
                  <a href="#">
                  <FaHeart />
                  </a>
                </div>
                <div className="catagory-product-image">
                  <img src={item.img} alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <a className="theme-btn-2" href="#">
                    Add To Cart
                    </a>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>${item.price}</h6><span>${item.discountedPrice}</span>
                  </div>
                  <h4><a href="#">{item.name}</a></h4>
                  <div className="star">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`fas fa fa-star ${i === 4 ? 'text-white' : ''}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategorySection;
