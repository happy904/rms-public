import React from 'react';
import tomatoImg from "../../Assets/images/tomato.png";
import deliveryManImg from "../../Assets/images/delivery-man-2.png";
import chilliImg from "../../Assets/images/chilli.png";

const FastDelivery = () => {
  return (
    <>
      <div className="contactbg2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 lastbanner">
              <div className="contact-seaction">
                <h3>Csrispy, every bite taste</h3>
                <h1>30 minutes fast
                  <span>delivery</span> challage
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="delivery-man-2">
                <img src={deliveryManImg} alt="Delivery man" />
              </div>
            </div>
          </div>
        </div>
        <div className="sideimg">
          <img className="img1" src={tomatoImg} alt="Tomato" />
          <img className="img2" src={chilliImg} alt="Chilli" />
        </div>
      </div>
    </>
  );
}

export default FastDelivery;
