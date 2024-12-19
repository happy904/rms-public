import React from "react";
import img001 from "../../Assets/images/001.png";
import img002 from "../../Assets/images/002.png";
import img003 from "../../Assets/images/003.png";
import aboutFoodBg from "../../Assets/images/about-food-bg.png";

const FoodProcessing = () => {
  const process = [
    {
      img: img001,
      step: " 01",
      heading: "cooking with care",
      para: "  It's the perfect dining experience where Experience quick and efficient",
    },
    {
      img: img002,
      step: " 02",
      heading: "cooking with care",
      para: "  It's the perfect dining experience where Experience quick and efficient",
    },
    {
      img: img003,
      step: " 03",
      heading: "cooking with care",
      para: "  It's the perfect dining experience where Experience quick and efficient",
    },
  ];
  return (
    <>
      <section
        className="food-processing-section bg-cover"
        style={{ backgroundImage: `url(${aboutFoodBg})` }}
      >
        <div className="container">
          <div className="section-title3 text-center">
            <span className="content-p">food processing</span>
            <h2>how we serve you?</h2>
          </div>
          <div className="food-processing-wrapper">
            <div className="row">
              {process.map((steps, key) => {
                return (
                  <div className="col-lg-4" key={key}>
                    <div className="food-processing-item">
                      <div className="food-processing-image position-relative">
                        <img src={steps.img} alt="Cooking Step 1" />
                        <div className="number">
                          <span>{steps.step}</span>
                        </div>
                      </div>
                      <div className="food-processing-content">
                        <h3>{steps.heading}</h3>
                        <p>{steps.para}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodProcessing;
