import React from 'react'
import ContactUsHeader from '../ContactUs/ContactUsHeader'
import FastDelivery from '../ContactUs/FastDelivery'
import CheckOutForm from './CheckOutForm'

const CheckOut = () => {
  return (
   <>
   <ContactUsHeader heading="CHECKOUT"/>
   <CheckOutForm/>
   <FastDelivery/>
   </>
  )
}

export default CheckOut