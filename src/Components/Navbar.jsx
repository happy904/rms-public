import React, { useState } from 'react';
import {
  FaBars,
  FaAngleDown,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaMapPin,
  FaEnvelope,
  FaClock,
  FaPhone,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../Assets/images/logo.svg';
import img01 from "../Assets/images/01.jpg";
import img02 from "../Assets/images/02.jpg";
import img03 from "../Assets/images/03.jpg";
import img04 from "../Assets/images/04.jpg";
import img05 from "../Assets/images/05.jpg";
import img06 from "../Assets/images/06.jpg";
import '../style.css';
import "../media.css";
import { Link } from 'react-router-dom';
import { useApiData } from './Context';

const Navbar = () => {
  const {data, img_url} = useApiData()
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Header2 */}
      <header className="container-fluid header2 py-3" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <ul className="d-flex align-items-center" style={{ gap: '15px', listStyle: 'none', padding: 0 }}>
              <li className="d-flex align-items-center">
                <FaMapPin />
                <span style={{ marginLeft: '5px' }}>Main Street, Melbourne</span>
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope />
                <span style={{ marginLeft: '5px' }}>info@company.com</span>
              </li>
              <li className="d-flex align-items-center">
                <FaClock />
                <span style={{ marginLeft: '5px' }}>Mon-Fri, 09am - 05pm</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="d-flex align-items-center" style={{ gap: '10px', listStyle: 'none', padding: 0 }}>
              <li><Link to="#"><FaFacebookF /></Link></li>
              <li><Link to="#"><FaTwitter /></Link></li>
              <li><Link to="#"><FaYoutube /></Link></li>
              <li><Link to="#"><FaLinkedin /></Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main Navbar */}
      <header className="container-fluid header1 navabr_bar" style={{ backgroundColor: "white" }}>
        <div className="nav container flex items-center relative position-relative py-3">
          <div className="logo">
            <Link to="/">
              <img src={img_url + data.logo} alt="Company Logo" className='companyLogo'/>
            </Link>
          </div>
          <nav className="navmenu">
            <ul className="nav-ul">
              <li className="dropdown">
                <Link to="/" className="hover-a"><span>HOME </span></Link>
              </li>
              <li>
                <Link to="/menu" className="hover-a"><span>MENU</span></Link>
              </li>
              <li>
                <Link to="/about" className="hover-a"><span>ABOUT US</span></Link>
              </li>
              <li className="dropdown">
                <Link to="/" className="hover-a">
                  <span>SHOP</span>
                  <FaAngleDown />
                </Link>
                <div className="dropdown-content">
                  <ul>
                    <li><Link to="/shopcart">SHOP CART</Link></li>
                    <li><Link to="/checkout" style={{ border: "none" }}>CheckOut</Link></li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <Link to="/" className="hover-a">
                  <span>PAGES</span>
                  <FaAngleDown />
                </Link>
                <div className="dropdown-content">
                  <ul>
                    <li><Link to="/shoplist">Shop List</Link></li>
                    <li><Link to="#" style={{ border: "none" }}>Blog Details</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="button-demo d-flex align-items-center" style={{ gap: "10px" }}>
            <Link to="/contact" className="btn btn-nav">CONTACT US</Link>
            <nav className="navbtn" style={{ marginRight: "10px", marginLeft: "10px" }} onClick={toggleSidebar}>
              <FaBars style={{ fontSize: "28px" }} />
            </nav>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`} style={{ position: 'fixed', top: 0, right: isSidebarVisible ? 0 : '-100%', width: '400px', height: '100%', backgroundColor: '#fff', transition: 'left 0.5s ease' }}>
        <div className="d-flex justify-content-between" style={{ marginBottom: "35px" }}>
          <div>
            <img src={logo} style={{ width: "100%" }} alt="Sidebar Logo" />
          </div>
          <button className="sidebarClose" onClick={toggleSidebar}>
            <AiOutlineClose style={{ fontSize: "18px" }} />
          </button>
        </div>
        <p>This involves interactions between a business and its customers. It's about meeting customers' needs and resolving their problems. Effective customer service is crucial.</p>
        <div className="row gy-4 side-images">
          {[img01, img02, img03, img04, img05, img06].map((image, index) => (
            <div className="col-lg-4" key={index}>
              <img src={image} style={{ width: "100%" }} alt={`Sidebar Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="offcanvas-contact">
          <h4>Contact Info</h4>
          <ul>
            <li className="d-flex align-items-center">
              <div><FaMapPin /></div>
              <div><Link to="#">Main Street, Melbourne, Australia</Link></div>
            </li>
            <li className="d-flex align-items-center">
              <div><FaEnvelope /></div>
              <div><Link to="mailto:info@foodking.com">{data.email}</Link></div>
            </li>
            <li className="d-flex align-items-center">
              <div><FaClock /></div>
              <div><Link to="#">Mon-Fri, 09am - 05pm</Link></div>
            </li>
            <li className="d-flex align-items-center">
              <div><FaPhone /></div>
              <div><Link to="tel:+11002345909">{data.phone}</Link></div>
            </li>
          </ul>
          <div className="d-flex" style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Link to="#" className="btn-get-started">
              Order Now
            </Link>
          </div>
          <div className="social-icon d-flex align-items-center" style={{ gap: "20px" }}>
            <Link to="#"><FaFacebookF /></Link>
            <Link to="#"><FaTwitter /></Link>
            <Link to="#"><FaYoutube /></Link>
            <Link to="#"><FaLinkedin /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
