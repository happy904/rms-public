import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useApiData } from "../Context";

const ContactForm = () => {
  const { data, img_url } = useApiData(); 

  const [value, setValue] = useState({
    userName: "",
    userEmail: "",
    userPhoneNo: "",
    userMeassage: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const contactData = {
      name: value.userName,
      email: value.userEmail,
      phone: value.userPhoneNo,
      message: value.userMeassage,
    };

    try {
      const response = await fetch(`http://192.168.0.109:8001/api/store-contact_info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Contact info submitted successfully:", result);
        setValue({
          userName: "",
          userEmail: "",
          userPhoneNo: "",
          userMeassage: "",
        });
      } else {
        console.error("Error submitting contact info:", result);
      }
    } catch (error) {
      console.error("Error submitting contact info:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="map-adress">
              <div className="git-in-touch">
                <h1>Get in touch</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                  faucibus odio feugiat arc dolor.
                </p>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093675!2d-122.4194154846783!3d37.77492977975859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f6b1d5f5%3A0x37ec4c3e1a4b1b8a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1699368430567!5m2!1sen!2s"
                  width="98%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-4">
            <div className="git-in-touch">
              <h1>Fill Up The Form</h1>
              <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="contact-input">
                <input
                  type="text"
                  name="userName"
                  placeholder="Your Name *"
                  onChange={handleChange}
                  value={value.userName}
                />
                <div className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
              </div>
              <div className="contact-input">
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Email Address *"
                  onChange={handleChange}
                  value={value.userEmail}
                />
                <div className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail-check">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
                    <path d="M3 7l9 6l9 -6" />
                    <path d="M15 19l2 2l4 -4" />
                  </svg>
                </div>
              </div>
              <div className="contact-input">
                <input
                  type="tel"
                  name="userPhoneNo"
                  placeholder="Phone Number *"
                  onChange={handleChange}
                  value={value.userPhoneNo}
                />
                <div className="input-icon">
                  <FaPhoneAlt className="ms-1" />
                </div>
              </div>
              <div className="contact-input">
                <textarea
                  name="userMeassage"
                  placeholder="Enter Your Message Here *"
                  onChange={handleChange}
                  value={value.userMeassage}
                ></textarea>
                <div className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-minus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M11.976 18.614l-3.976 2.386v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8" />
                    <path d="M16 19h6" />
                  </svg>
                </div>
              </div>
              <div className="contact-input">
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                  Get In Touch
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
