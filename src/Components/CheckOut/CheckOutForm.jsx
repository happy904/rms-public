import React, { useState } from 'react';
import './ChecOutForm.css'
const CheckOutForm = () => {

  const [value, setValue] = useState({

  })
  return (
    <>
      <section className="checkout-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="">
                <div className="row g-4">
                  <div className="col-lg-3 col-md-5">
                    <div className="checkout-radio">
                      <p className="primary-text">Select any one</p>
                      <div className="checkout-radio-wrapper">
                        <div className="checkout-radio-single">
                          <input
                            className="form-check-input me-2"
                            id="cCard"
                            type="radio"
                            value="Credit/Debit Cards"
                            name="pay-method"
                          />
                          <label htmlFor="cCard">Credit/Debit Cards</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            className="form-check-input me-2"
                            id="paypal"
                            type="radio"
                            value="PayPal"
                            name="pay-method"
                          />
                          <label htmlFor="paypal">PayPal</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            className="form-check-input me-2"
                            id="payoneer"
                            type="radio"
                            value="Payoneer"
                            name="pay-method"
                          />
                          <label htmlFor="payoneer">Payoneer</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            className="form-check-input me-2"
                            id="visa"
                            type="radio"
                            value="Visa"
                            name="pay-method"
                          />
                          <label htmlFor="visa">Visa</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            className="form-check-input me-2"
                            id="mastercard"
                            type="radio"
                            value="Mastercard"
                            name="pay-method"
                          />
                          <label htmlFor="mastercard">Mastercard</label>
                        </div>
                        <div className="checkout-radio-single">
                          <input
                            className="form-check-input me-2"
                            id="fastPay"
                            type="radio"
                            value="Fastpay"
                            name="pay-method"
                          />
                          <label htmlFor="fastPay">Fastpay</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-7">
                    <div className="checkout-single-wrapper">
                      <div className="checkout-single boxshado-single">
                        <h4>Billing address</h4>
                        <div className="checkout-single-form">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  required
                                  placeholder="First Name"
                                  type="text"
                                  name="userFirstName"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  required
                                  placeholder="Last Name"
                                  type="text"
                                  name="userLastName"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  required
                                  placeholder="Your Email"
                                  type="email"
                                  name="userCheckEmail"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <div className="nice-select country-select">
                                  <span className="current">USA</span>
                                </div>
                                <ul className="list">
                                  <li data-value="usa" className="option selected">
                                    USA
                                  </li>
                                  <li data-value="aus" className="option">
                                    AUS
                                  </li>
                                  <li data-value="uk" className="option">
                                    UK
                                  </li>
                                  <li data-value="ned" className="option">
                                    NED
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <textarea
                                  name="textArea"
                                  placeholder="Address"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-single">
                      <h4>Payment Methods</h4>
                      <div className="checkout-single-form">
                        <div className="row g-3">
                          <div className="col-lg-12">
                            <div className="input-single">
                              <label htmlFor="userCardNumber">Card number</label>
                              <input
                                id="userCardNumber"
                                placeholder="0000 0000 0000 0000"
                                type="number"
                                name="user-card-number"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-single">
                              <label htmlFor="userCardDate">Expiry date</label>
                              <input
                                id="userCardDate"
                                placeholder="DD/MM/YY"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-single">
                              <label htmlFor="userCvc">Cvc / Cvv</label>
                              <input
                                maxLength="3"
                                id="userCvc"
                                required
                                placeholder="3 Digits"
                                type="text"
                                name="user-card-cvc"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-single">
                              <label htmlFor="userCardName">Name on card</label>
                              <input
                                id="userCardName"
                                placeholder="Name"
                                type="text"
                                name="user-card-name"
                              />
                            </div>
                          </div>
                          <div className="payment-save">
                            <input
                              className="form-check-input"
                              id="saveForNext"
                              type="checkbox"
                              name="save-for-next"
                            />
                            <label htmlFor="saveForNext">
                              Save for my next payment
                            </label>
                          </div>
                          <div className="mt-4">
                            <a className="theme-btn3" href="/checkout">
                              Payment Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutForm;