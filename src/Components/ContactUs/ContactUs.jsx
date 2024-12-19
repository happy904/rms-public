import React from 'react'
import ContactUsHeader from './ContactUsHeader'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import FastDelivery from './FastDelivery'

const ContactUs = () => {
  return (
    <>
    <ContactUsHeader heading=" Contact Us "/>
    <ContactInfo/>
    <ContactForm/>
    <FastDelivery/>
    </>
  )
}

export default ContactUs