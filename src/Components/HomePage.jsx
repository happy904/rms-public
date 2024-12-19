import React from "react";
import HeroSection from "./Home/HeroSection";
import FoodItems from "./Home/FoodItems";
import AsthaticDay from "./Home/AsthaticDay";
import FoodCategorySection from "./Home/FoodCategorySection";
import FoodIconeWrapper from "./Home/FoodIconeWrapper";
import AboutWrapper from "./Home/AboutWrapper";
import FoodBannerSection from "./Home/FoodBannerSection";
import Testimonial from "./Home/Testimonial";
import { useApiData } from "./Context";

const HomePage = () => {
  const { data } = useApiData();
  console.log(data);

  return (
    <>
      <HeroSection />
      <FoodItems />
      <AsthaticDay />
      <FoodCategorySection />
      <FoodIconeWrapper />
      <AboutWrapper />
      <FoodBannerSection />
      <Testimonial />
    </>
  );
};

export default HomePage;
