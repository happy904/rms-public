import React from "react";
import logo from "../Assets/images/logo.svg";
import appStore from "../Assets/images/app-store.png";
import googlePlay from "../Assets/images/google-play.png";
import cardFooter from "../Assets/images/card.png";
import { FaPinterestP } from "react-icons/fa";
import { useApiData } from "./Context";
import { Link } from "react-router-dom";
const Footer = () => {
  const { data } = useApiData();
  return (
    <>
      <section id="footer" className="footer ">
        <div className="container mb-5">
          <div className="row gy-4 d-flex justify-content-between text-align-center">
            <div className="col-lg-3 col-md-8 col-12 footer-about">
              <img src={logo} alt="" />
              <div className="footer-contact">
                <p>We believe it has the power to do amazing things.</p>
                <span>Interested in working with us?</span>
                <Link to={data?.email}>
                  <h4>{data?.email}</h4>
                </Link>
              </div>
              <div className="footer-icons d-flex">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" />
                  </svg>
                </a>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-vimeo"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18.5 3c2.38 0 3.985 2.174 3.486 5.164c-.535 3.21 -2.25 6.074 -4.808 8.675c-1.277 1.298 -2.211 2.061 -4.112 3.485c-2.323 1.597 -4.408 .365 -5.47 -1.897c-.292 -.618 -.586 -1.724 -1.248 -4.477l-.03 -.126c-.483 -2.01 -.819 -3.319 -.982 -3.878l-.016 -.052l-.031 .013l-.13 .06l-.137 .07a4 4 0 0 0 -.43 .269a1 1 0 0 1 -1.3 -.099l-1 -1a1 1 0 0 1 -.124 -1.262a20 20 0 0 1 1.918 -2.382c.98 -1.037 1.955 -1.816 2.928 -2.233c.5 -.214 .996 -.33 1.486 -.33c2.237 0 3.02 1.588 3.567 4.963c.03 .183 .057 .359 .112 .709c.123 .784 .197 1.198 .292 1.588c.292 1.185 .528 1.984 .735 2.483l-.016 -.039l.096 -.107c.354 -.411 .757 -1.014 1.172 -1.771l.157 -.291c.391 -.745 .505 -1.528 .363 -1.9c-.028 -.073 .007 -.065 -.456 .218a1 1 0 0 1 -1.51 -1.013c.496 -3.053 2.745 -4.84 5.488 -4.84" />
                  </svg>
                </a>
                <a href="" style={{ textDecoration: "none;" }}>
                  <FaPinterestP />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <div className="ul-links">
                <div className="quick">
                  <h4>Quick Links</h4>
                </div>
                <ul>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">About Company</a>
                  </li>
                  <li>
                    <a href="">Latest News</a>
                  </li>
                  <li>
                    <a href="">Team Member</a>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <div className="ul-links">
                <div className="account">
                  <h4>My Account</h4>
                </div>
                <ul>
                  <li>
                    <a href="">My Profile</a>
                  </li>
                  <li>
                    <a href="">My Order History</a>
                  </li>
                  <li>
                    <a href="">My Wish List</a>
                  </li>
                  <li>
                    <a href="">Order Tracking</a>
                  </li>
                  <li>
                    <a href="">Shopping Cart</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <div className="ul-links">
                <div className="address">
                  <h4>Address</h4>
                </div>
                <div className="footer-address-text">
                  <h6 className=" py-0">
                    570 8th Ave, New York,NY <span>10018</span>United States
                  </h6>
                  <h5 className=" py-0">Hours:</h5>
                  <h6 className=" py-0">
                    9.30am – 6.30pm <br />
                    Monday to Friday
                  </h6>
                </div>
                <div className="support-text py-0 mt-0">
                  <h5>24/7 Support center</h5>
                  <h3>
                    <a href="">{data?.phone}</a>
                  </h3>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-6 footer-links">
              <div className="ul-links">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h4>Install app</h4>
                  </div>
                  <div className="footer-apps-items">
                    <h5>From App Store or Google Play</h5>
                    <div className="apps-image d-flex align-items-center">
                      <a href="#">
                        <img src={appStore} alt="" />
                      </a>
                      <a href="#">
                        <img src={googlePlay} alt="" />
                      </a>
                    </div>
                    <div className="support-text">
                      <h5>24/7 Support center</h5>
                      <h3>
                        <a href="">{data?.phone}</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className=" copyright">
          <div
            className="container d-flex justify-content-center"
            style={{ alignItems: "center;" }}
          >
            <div className="">
              <p className="">
                © Copyright <span style={{ color: "#FFB936;" }}>2024</span>{" "}
                <a href="">{data?.name} </a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
