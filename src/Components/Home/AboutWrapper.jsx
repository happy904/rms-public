import React from 'react';
import burger from "../../Assets/images/burger.png";
import burgerText from '../../Assets/images/burger-text.png';
import foodShape from '../../Assets/images/food-shape.png';
import qualityIcon from '../../Assets/images/quality (1).png';
import reputationIcon from '../../Assets/images/reputation.png';

const AboutWrapper = () => {
  return (
    <>
    <div className="p-3" style={{ backgroundColor : "var(--bg-color)"}}>
      <div className="container w-100" style={{ marginTop: '90px'}}>
        <div className="about-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image position-relative">
                <img src={burger} width="100%" alt="Burger" />
                <div className="burger-text">
                  <img src={burgerText} alt="Burger Text" />
                </div>
                <div className="price">
                  <h2>$<span className="count">4,99</span></h2>
                </div>
                <div className="since-text" style={{ backgroundImage: `url(${foodShape})` }}>
                  <h3>SINCE /1985</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="content-p">about our food</span>
                  <h2 style={{color: "var(--header)"}}>Where Quality Meets Excellent <span>Service.</span></h2>
                  <p style={{ letterSpacing: '-0.5px' }}>
                    It's the perfect dining experience where every dish is crafted with fresh, high-quality ingredients. 
                    Experience quick and efficient service that ensures your food is served fresh. 
                    It's the dining experience where every dish is crafted with fresh, high-quality ingredients.
                  </p>
                  <div className="icon-area">
                    <div className="icon-items d-flex" style={{ gap: '20px' }}>
                      <div className="icon">
                        <img src={qualityIcon} alt="Quality Icon" />
                      </div>
                      <div className="content">
                        <h4>Super quality food</h4>
                        <p>A team of dreamers and doers build unique interactive music and art</p>
                      </div>
                    </div>
                    <div className="icon-items d-flex" style={{ gap: '20px' }}>
                      <div className="icon">
                        <img src={reputationIcon} alt="Reputation Icon" />
                      </div>
                      <div className="content">
                        <h4>Well reputation</h4>
                        <p>A team of dreamers and doers build unique interactive music and art</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 d-flex" style={{ gap: '20px' }}>
                    <a href="" className="btn-get-started" style={{ padding: '20px 20px', letterSpacing: '-0.5px' }}>
                      MORE ABOUT US
                    </a>
                    <div className="info-content">
                      <span>BRENDON GARREY</span>
                      <h6>Customer’s experience is our highest priority.</h6>
                    </div>
                  </div>
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

export default AboutWrapper;
