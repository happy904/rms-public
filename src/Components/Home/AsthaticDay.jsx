import React from "react";
import potatoShape from "../../Assets/images/patato-shape.png"
import percentOff from "../../Assets/images/50percent-off-2.png"
import pizzaText from "../../Assets/images/pizza-text-2.png"
import spicy from "../../Assets/images/spicy.png"
import tomatoShape from "../../Assets/images/tomato-shape-2.png"
import grilled from "../../Assets/images/grilled.png"
const AsthaticDay = () => {
  return (
    <>
      <section className="grilled-banner position-relative">
        <div className="patato-shape">
          <img src={potatoShape} width="100%" alt="" />
        </div>
        <div className="offer-shape float-bob-y">
          <img src={percentOff} width="100%" alt="" />
        </div>
        <div className="text-shape">
          <img src={pizzaText} width="100%" alt="" />
        </div>
        <div className="spicy-shape">
          <img src={spicy} width="100%" alt="" />
        </div>
        <div className="tomato-shape">
          <img src={tomatoShape} width="100%" alt="" />
        </div>
        <div className="container">
          <div className="grilled-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="grilled-content">
                  <h4 className="grilled-heading">SAVE 20%</h4>
                  <h2 className="grilled-heading">
                    TODAY'S <span>ASTACKIN</span> DAY
                  </h2>
                  <h3 className="grilled-heading">
                    <a href="">
                      grilled <span className="text-1">chiken</span>
                    </a>
                    <span className="text-2">$59,00</span>
                  </h3>
                  <div className="btn-btn">
                    <a href="" className="btn-get-started">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                        <path d="M3 9l4 0" />
                      </svg>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="grilled-image">
                  <img src={grilled} width="100%" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AsthaticDay;
