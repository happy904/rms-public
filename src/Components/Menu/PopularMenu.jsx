import React, { useState } from 'react';
import rolls from "../../Assets/images/rolls.webp";
import fire from "../../Assets/images/fire-bg.png"
import { Modal } from "react-bootstrap"
import { RxCross2 } from "react-icons/rx";
import modalPizza from "../../Assets/images/modalPizza.jpg"
import varientList from "../../Assets/images/varientList.webp"
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { useApiData } from "../Context";
import "./PapularMenu.css"
const limitDescription = (description, wordLimit = 8) => {
  return description
    .split(' ')
    .slice(0, wordLimit)
    .join(' ') + (description.split(' ').length > wordLimit ? '...' : '');
};

const PopularMenu = ({ menuCategories, filteredItems, selectedSubcate }) => {
  console.log(filteredItems);

  const { data, img_url } = useApiData();
  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(false);
  const [count, setCount] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <section className="foodmenu-content">
        <div className="" style={{ maxWidth: "90%", margin: "auto" }}>
          <div className="row">
            <div className="" style={{ width: "70%" }}>
              <div className="food-heading">
                <div className="heading-food2 d-flex mt-3" style={{ gap: '5px', justifyContent: "flex-start" }}>
                  <div className="fire-image" style={{ width: "20px" }}>
                    <img src={fire} alt="" style={{ width: "40px" }} />
                  </div>
                  <h2 className="ms-2 mt-1">{selectedSubcate === 'all' ? 'All' :menuCategories?.find((it) => it.id === selectedSubcate)?.name}</h2>
                </div>
                <p>Most ordered right now</p>
              </div>
              <div className='row'>
                {filteredItems?.map((item, idx) => {
                  return (
                    <div className="col-md-6 mb-4" key={item.id}>
                      <div className="popular-items">
                        <div className="inner-items">
                          <div className="row">
                            <div className="col-lg-8">
                              <div>
                                <h3>{item.name}</h3>
                                <p style={{ marginBottom: '10px' }}>Rs. {item.sale_price}</p>
                                <p>{limitDescription(item.description)}</p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="food-images" style={{ position: 'relative' }}>
                                <img
                                  src={item.image}
                                  width="100%"
                                  height="123px"
                                  alt={item.name}
                                />
                                <div className="plus" onClick={handleShow}>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    className="fl-none"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-testid="quantity-stepper-plus-icon"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 5C12.3797 5 12.6935 5.28215 12.7432 5.64823L12.75 5.75V10.85C12.75 11.0709 12.9291 11.25 13.15 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.3797 18.7178 12.6935 18.3518 12.7432L18.25 12.75H13.15C12.9291 12.75 12.75 12.9291 12.75 13.15V18.25C12.75 18.6642 12.4142 19 12 19C11.6203 19 11.3065 18.7178 11.2568 18.3518L11.25 18.25V13.15C11.25 12.9291 11.0709 12.75 10.85 12.75H5.75C5.33579 12.75 5 12.4142 5 12C5 11.6203 5.28215 11.3065 5.64823 11.2568L5.75 11.25H10.85C11.0709 11.25 11.25 11.0709 11.25 10.85V5.75C11.25 5.33579 11.5858 5 12 5Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* <div className="foodmenu-content">
                {menuCatgory.map((category) => (
                  <div key={category.id}>
                    <div className="food-heading">
                      <div className="heading-food2 d-flex mt-3" style={{ gap: '5px', justifyContent: "flex-start" }}>
                        <div className="fire-image" style={{ width: "20px" }}>
                          <img src={fire} alt="" style={{ width: "40px" }} />
                        </div>
                        <h2 className="ms-2 mt-1">{category.name.toUpperCase()}</h2>
                      </div>
                      <p>Most ordered right now</p>
                    </div>

                    <div className="row g-4">
                      {filteredItems?.map((item) => (
                        <div className="col-6" key={item.id}>
                          <div className="popular-items">
                            <div className="inner-items">
                              <div className="row">
                                <div className="col-lg-8">
                                  <div>
                                    <h3>{item.name}</h3>
                                    <p style={{ marginBottom: '10px' }}>Rs. {item.sale_price}</p>
                                    <p>{limitDescription(item.description)}</p>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="food-images" style={{ position: 'relative' }}>
                                    <img
                                      src={item.image}
                                      width="100%"
                                      height="123px"
                                      alt={item.name}
                                    />
                                    <div className="plus" onClick={handleShow}>
                                      <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        className="fl-none"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-testid="quantity-stepper-plus-icon"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12 5C12.3797 5 12.6935 5.28215 12.7432 5.64823L12.75 5.75V10.85C12.75 11.0709 12.9291 11.25 13.15 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.3797 18.7178 12.6935 18.3518 12.7432L18.25 12.75H13.15C12.9291 12.75 12.75 12.9291 12.75 13.15V18.25C12.75 18.6642 12.4142 19 12 19C11.6203 19 11.3065 18.7178 11.2568 18.3518L11.25 18.25V13.15C11.25 12.9291 11.0709 12.75 10.85 12.75H5.75C5.33579 12.75 5 12.4142 5 12C5 11.6203 5.28215 11.3065 5.64823 11.2568L5.75 11.25H10.85C11.0709 11.25 11.25 11.0709 11.25 10.85V5.75C11.25 5.33579 11.5858 5 12 5Z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              </div> */}
            </div>
            <div className="" style={{ width: "30%" }}>
              <div className="side-foodmenu" style={{ overflowY: "scroll" }}>
                <div className="inner-foodmenu">
                  <div className="food-btn">
                    <div className="inner-food-btn">
                      <button className="delivery-btn">
                        <a href="">Delivery</a>
                      </button>
                      <button className="pick-btn">
                        <a href="">Pick-up</a>
                      </button>
                    </div>
                  </div>
                  <div className="side-image-content">
                    <div className="side-image">
                      <img src={rolls} alt="" />
                    </div>
                    <div className="side-content-hp">
                      <h2>Hungry?</h2>
                      <p>You haven't added anything to your cart!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} style={{ padding: "50px;" }}>
        <div closeButton style={{ display: "flex", justifyContent: "space-between" }} >
          <h4>Stuffed Crust Best of West Pizza</h4>
          <div variant="secondary" onClick={handleClose} className='crossIcone text-center'>
            <RxCross2 />
          </div>
        </div>
        <hr />
        <img src={modalPizza} alt="" className="modalImg" />
        <h3>Stuffed Crust Best of West Pizza</h3>
        <h6>Rs. 1,390</h6>
        <p>Juicy chicken, mixed vegetables, pepperoni, mexican sauce topped with cheese.</p>
        <hr />
        <div>
          <div className="variation p-4 my-3">
            <div className="variation-header d-flex justify-content-between">
              <div className="variation-title">
                <h5>Variation</h5>
                <p>Select 1</p>
              </div>
              <div className="varation-status">
                <span>   Require</span>
              </div>
            </div>
            <div className="variation-body">
              <li className="variation-options d-flex justify-content-between">
                <div >
                  <input type="radio" name="" id="" className='me-2' />
                  <span className=''>
                    Kabab Stuffed Crust
                    Free
                  </span>
                </div>
                <div className="satus">
                  <span>Free</span>
                </div>
              </li>
              <li className="variation-options d-flex justify-content-between">
                <div >
                  <input type="radio" name="" id="" className='me-2' />
                  <span className=''>
                    Kabab Stuffed Crust
                    Free
                  </span>
                </div>
                <div className="satus">
                  <span>Free</span>
                </div>
              </li>
            </div>
          </div>

          <div className="variation p-4 my-3 bg-transparent" >
            <div className="variation-header d-flex justify-content-between">
              <div className="variation-title">
                <h5>Frequently bought together</h5>
                <p>Others around you liked this</p>
              </div>
              <div className="varation-status ">
                <span>Optional</span>
              </div>
            </div>
            <div className="variation-body">
              <li className="variation-options d-flex justify-content-between">
                <div >
                  <input type="checkbox" name="" id="" className='me-2' />
                  <img src={varientList} alt="" />
                  <span className=''>
                    Kabab Stuffed Crust
                    Free
                  </span>
                </div>
                <div className="satus">
                  <span>Free</span>
                </div>
              </li>
              <li className="variation-options d-flex justify-content-between">
                <div >
                  <input type="checkbox" name="" id="" className='me-2' />
                  <img src={varientList} alt="" />
                  <span className=''>
                    Kabab Stuffed Crust
                    Free
                  </span>
                </div>
                <div className="satus">
                  <span>+ Rs. 380</span>
                </div>
              </li>
            </div>
          </div>

          <div className="variations-instrauctions">
            <h4>Special instructions</h4>
            <p>Special requests are subject to the restaurant's approval. Tell us here!</p>
            <textarea name="" id="" cols="68" rows="3" placeholder='e.g. No mayo'></textarea>
          </div>
          <div className="variations-instrauctions mt-2">
            <h4>If this item is not available</h4>
            <div onClick={() => setShowList(!showList)} style={{ cursor: 'pointer', transition: "all .5s ease" }}>
              Toggle Availability Options
            </div>
            {showList && (
              <ul className='' >
                <li className='py-1'>Choose an alternative</li>
                <li className='py-1'>Wait for restocking</li>
              </ul>
            )}
          </div>
          <div className="addToCartContainer d-flex align-items-center mt-3">
            <div className="cartIcones col-3">
              <button onClick={() => setCount(count + 1)}><IoIosAdd /></button>
              <span className='px-1'>{count}</span>
              <button onClick={() => setCount(count >= 1 ? count - 1 : 0)}><GrFormSubtract /></button>
            </div>
            <div className="col-9 ">
              <button className='addToCart col-12' onClick={handleClose}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PopularMenu;
