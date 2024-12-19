import React from "react";
import ContactUsHeader from "../ContactUs/ContactUsHeader";
import CartSection from "./CartSection";
import FastDelivery from "../ContactUs/FastDelivery";

const ShopCart = () => {
  return (
    <>
      <ContactUsHeader heading="SHOP CART" />
      <CartSection />
      <FastDelivery />
    </>
  );
};

export default ShopCart;
