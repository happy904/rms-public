import React from "react";
import categoryCardShape from "../../Assets/images/catagory-card-shape.jpg";
import pastaImg from "../../Assets/images/pasta.png";
import burgerImg from "../../Assets/images/burger-shape.png";
import burger from "../../Assets/images/burger.png";
import frenchFry from "../../Assets/images/french-fry.png";
import pizza from "../../Assets/images/pizza.png";
import Carousel from "react-elastic-carousel";

const FoodItems = () => {
  const foodItems = [
    {
      id: 1,
      bgImg: categoryCardShape,
      innerImg: pastaImg,
      overlayImg: burgerImg,
      title: "PRO PIZZA",
      description: "5 products",
    },
    {
      id: 2,
      bgImg: categoryCardShape,
      innerImg: burger,
      overlayImg: burgerImg,
      title: "PRO PIZZA",
      description: "5 products",
    },
    {
      id: 3,
      bgImg: categoryCardShape,
      innerImg: frenchFry,
      overlayImg: burgerImg,
      title: "PRO PIZZA",
      description: "5 products",
    },
    {
      id: 4,
      bgImg: categoryCardShape,
      innerImg: pizza,
      overlayImg: burgerImg,
      title: "PRO PIZZA",
      description: "5 products",
    },
    {
      id: 5,
      bgImg: categoryCardShape,
      innerImg: pizza,
      overlayImg: burgerImg,
      title: "PRO PIZZA",
      description: "5 products",
    },
  ];
 const breakPoints = [
  {width:1, itemsToShow: 1},
  {width:750, itemsToShow: 3},
  {width:1200, itemsToShow: 4}
 ]
  return (
    <>
      <section className="slider" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container">
          <div className="content-p text-center" style={{ marginBottom: "55px" }}>
            <span>crispy, every bite taste</span>
            <h2>Popular Food Items</h2>
          </div>
          <div className="sliders row">
            <Carousel breakPoints={breakPoints}>
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="slider-one col-12 col-lg-11 position-relative"
              >
                <img
                  className="bg_img"
                  src={item.bgImg}
                  style={{ width: "100%", height: "450px" }}
                  alt=""
                />
                <div className="inner-slider position-absolute">
                  <div className="slider-img position-relative">
                    <img
                      className="bg_img"
                      src={item.innerImg}
                      style={{ width: "100%" }}
                      alt=""
                    />
                    <div
                      className="burger-img"
                      style={{ position: "absolute", top: "0px" }}
                    >
                      <img src={item.overlayImg} alt="" />
                    </div>
                  </div>
                  <span className="line"></span>
                  <h3>{item.title}</h3>
                  <p className="content-p2">{item.description}</p>
                </div>
              </div>
            ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodItems;
