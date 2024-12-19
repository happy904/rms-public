import React from 'react';
import cooking from "../../Assets/images/cooking.png";
import qualityIcon from "../../Assets/images/quality (2).png";
import deliveryIcon from "../../Assets/images/delivery-man.png";
import foodShape from "../../Assets/images/food-shape-2.png";

const FoodIconeWrapper = () => {
  return (
    <>
    <div className='py-5' style={{ backgroundColor : "var(--bg-color)"}}>
      <div className="container">
        <div 
          className="food-icon-wrapper bg-cover" 
          style={{ backgroundImage: `url(${foodShape})` }}
        >
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="single-food-icon">
                <div className="icon">
                  <img src={qualityIcon} alt="Super Quality Food" />
                </div>
                <div className="content">
                  <h4>SUPER QUALITY FOOD</h4>
                  <p>A team of dreamers and doers building unique interactive music and art</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food-icon">
                <div className="icon">
                  <img src={cooking} alt="Original Recipes" />
                </div>
                <div className="content">
                  <h4>ORIGINAL RECIPES</h4>
                  <p>A team of dreamers and doers building unique interactive music and art</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food-icon">
                <div className="icon">
                  <img src={deliveryIcon} alt="Quick Fast Delivery" />
                </div>
                <div className="content">
                  <h4>QUICK FAST DELIVERY</h4>
                  <p>A team of dreamers and doers building unique interactive music and art</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food-icon">
                <div className="icon">
                  <img src={qualityIcon} alt="100% Fresh Foods" />
                </div>
                <div className="content">
                  <h4>100% FRESH FOODS</h4>
                  <p>A team of dreamers and doers building unique interactive music and art</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FoodIconeWrapper;
