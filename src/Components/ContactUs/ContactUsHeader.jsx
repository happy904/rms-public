import React from "react";

const ContactUsHeader = ( {heading}) => {
  return (
    <>
      <div className="header-back-img" style={{ marginTop: "88px" }}>
        <div className="menu-bg-img position-relative">
          <div className="container">
            <div className="banner-text page-heading">
              <h1>{heading}</h1>
              <div className="breadcrumb-items">
                <ul>  
                  <li>
                    <a href="/" className="content-p">Home PAGE</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d12525"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </li>
                  <li>
                    <a href="#" className="content-p">{heading}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsHeader;