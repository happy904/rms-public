import React from "react";
import burgerBg from "../../Assets/images/burger-bg.png";
import bigBurger from "../../Assets/images/big-burger.png";
import pizzaText from "../../Assets/images/pizza-text-2.png";
import burgerImage from "../../Assets/images/burger-2.png";
import pepsiBg from "../../Assets/images/pepsi-bg.png";
import offerImage from "../../Assets/images/50percent-off-3.png";
import rollerBox from "../../Assets/images/roller-box.png";

const FoodBannerSection = () => {
  return (
    <>
    <div className="" style={{backgroundColor:"var(--bg-color)"}}>
      <div className="container food-banner-section">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="burger-banner-items bg-cover"
              style={{ backgroundImage: `url(${burgerBg})` }}
            >
              <div className="burger-content text-center">
                <h3>today</h3>
                <h2>special</h2>
                <h4>
                  <a className="text-white" href="#">
                    beef <span style={{ color: "#FFB936" }}>burger</span>
                  </a>
                </h4>
                <div
                  className="mt-4 d-flex justify-content-center"
                  style={{ zIndex: 1 }}
                >
                  <a href="#" className="btn-get-started2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                      <path d="M3 9l4 0" />
                    </svg>
                    ORDER NOW
                  </a>
                </div>
              </div>
              <div className="burger-image">
                <img src={bigBurger} alt="Big Burger" />
              </div>
              <div className="text-shape">
                <img src={pizzaText} alt="Pizza Text" />
              </div>
              <div className="burger-text">
                <img src={burgerImage} alt="Burger" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="single-offer-items bg-cover"
              style={{ backgroundImage: `url(${pepsiBg})` }}
            >
              <div className="offer-content">
                <h5>crispy, every bite taste</h5>
                <h3>
                  FASH FOOD <br />
                  MEAL
                </h3>
                <p>
                  The mouth-watering aroma of <br />
                  sizzling burgers
                </p>
                <div className=" d-flex">
                  <a href="#" className="btn-get-started2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                      <path d="M3 9l4 0" />
                    </svg>
                    ORDER NOW
                  </a>
                </div>
              </div>
              <div className="offer-img">
                <img src={offerImage} alt="50% Off Offer" />
              </div>
              <div className="roller-box">
                <img src={rollerBox} alt="Roller Box" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FoodBannerSection;
