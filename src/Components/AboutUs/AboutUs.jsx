import React from "react";
import ContactUsHeader from "../ContactUs/ContactUsHeader";
import AboutWrapper from "../Home/AboutWrapper";
import FastDelivery from "../ContactUs/FastDelivery";
import FoodBannerSection from "../Home/FoodBannerSection";
import Testimonial from "../Home/Testimonial";
import BookingSection from "../Menu/BookingSection";
import FoodProcessing from "./FoodProcessing";
import FoodCategories from "./FoodCategories";

const AboutUs = () => {
  return (
    <>
      <ContactUsHeader heading="About us" />
      <AboutWrapper />
      <FastDelivery />
      <FoodCategories />
      <FoodBannerSection />
      <FoodProcessing />
      <Testimonial />
      <BookingSection />
    </>
  );
};

export default AboutUs;
