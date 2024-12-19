import React, { use, useState } from "react";
import wings from "../../Assets/images/wings1.jpeg";
import wingsAndFries from "../../Assets/images/wingsAndFries.jpeg";
import nugets from "../../Assets/images/nugets.jpeg";
import { ImCross } from "react-icons/im";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartSection = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Deluxe Burger",
      image: wings,
      price: 12.99,
      quantity: 2,
      subtotal: 12.99,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image: wingsAndFries,
      price: 14.99,
      quantity: 1,
      subtotal: 14.99,
    },
    {
      id: 3,
      name: "Caesar Salad",
      image: nugets,
      price: 8.99,
      quantity: 1,
      subtotal: 8.99,
    },
  ]);

  const increment = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };
  const decrement = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              subtotal:
                item.quantity > 1
                  ? (item.quantity - 1) * item.price
                  : item.price,
            }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateCard = ()=>{
  
    console.log(cartItems);
    
  }
  return (
    <>
      <section className="cart-section">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="cart-wrapper">
                  <div className="cart-items-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr className="cart-item" id={item.id}>
                            <td className="cart-item-info">
                              <img src={item.image} alt={item.name} />
                              <span>{item.name}</span>
                            </td>
                            <td className="cart-item-price">{item.price}</td>
                            <td>
                              <div className="cart-item-quantity">
                                <span>{item.quantity}</span>
                                <div className="td-icons">
                                  <span onClick={() => increment(item.id)}>
                                    <FaCaretUp />
                                  </span>
                                  <span
                                    onClick={() => {
                                      decrement(item.id);
                                    }}
                                  >
                                    <FaCaretDown />
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>{item.subtotal.toFixed(2)}</td>
                            <td>
                              <span
                                className="cross"
                                onClick={() => {
                                  deleteItem(item.id);
                                }}
                              >
                                <ImCross />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-wrapper-footer">
                    <form>
                      <input
                        id="promoCode"
                        placeholder="Promo code"
                        type="text"
                        name="promo-code"
                      />
                      <a className="theme-btn3" href="#">
                        Apply Code
                      </a>
                    </form>
                    <span className="theme-btn3" onClick={updateCard}>
                      Update Cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-lg-6">
                <div className="cart-pragh-box">
                  <div className="cart-graph">
                    <h4>Cart Total</h4>
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>123</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>123</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>1234</span>
                      </li>
                    </ul>
                    <div className="chck">
                      <Link className="theme-btn3" to="/checkout">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartSection;
