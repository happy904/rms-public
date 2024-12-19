import React from 'react'
import ContactUsHeader from '../ContactUs/ContactUsHeader'
import FoodCategorySection from '../Home/FoodCategorySection'
import BookingSection from './BookingSection'
import PopularMenu from './PopularMenu'
import FoodMenuBar from './FoodMenuBar'
import "./PapularMenu.css"
const MenuPage = () => {
  return (
    <>
    <ContactUsHeader heading="FOOD MENU"/>
    {/* <FoodCategorySection/> */}
    {/* <BookingSection/> */}
    {/* <PopularMenu/> */}
    <FoodMenuBar/>
    </>
  )
}

export default MenuPage