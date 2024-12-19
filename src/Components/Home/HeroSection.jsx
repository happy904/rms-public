import React from 'react';
import heroBg from "../../Assets/images/bannerThumb1_2.png";

const HeroSection = () => {
  return (
    <>
      <div className="header-bg">
        <div className="container-fluid" style={{ marginTop: "110px" }}>
          <div className="hero container">
            <div className="row gy-4 justify-content-between">
              <div className="col-lg-6 col-md-10 order-lg-last">
                <div className="chicken-img">
                  <img src={heroBg} style={{ width: "100%" }} alt="Hero Image" />
                </div>
              </div>
              <div className="col-lg-6">
                <p className="content-p">Crispy, every bite taste</p>
                <h1>Awesome Fried Chicken</h1>
                <div className="mt-5">
                  <a href="#" className="btn-get-started">
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
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
