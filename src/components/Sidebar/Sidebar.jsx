import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";
import Lock from "../../assets/images/Lock.png";
import deleteicon from "../../assets/images/deleteicon.png";
import { useCart } from "../context/CartContext";

const Sidebar = () => {
  const { cartItems, subtotal, removeFromCart } = useCart();

  return (
    <>
      <div className="overlay"></div>

      <div className="sidebar">

        {/* Header */}
        <div className="Sidebar-content">
          <h1>Shopping Cart</h1>
          <img src={Lock} alt="lock" />
        </div>

        <hr />

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-left">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />

                <div className="cart-info">
                  <h4>{item.name}</h4>

                  <p>
                    <span>{item.quantity}</span>
                    <span className="multiply"> × </span>

                    <span className="price">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <img src={deleteicon} alt="Delete" />
              </button>
            </div>
          ))
        )}

        {/* Subtotal */}
        <div className="Sidebar-para">
          <p>Subtotal</p>

          <span className="price">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>

        <hr />

        {/* Buttons */}
        <div className="Sidebar-btns">
          <Link to="/cartmain">
            <button>Cart</button>
          </Link>

          <Link to="/checkout">
            <button>Checkout</button>
          </Link>

          <Link to="/comparison">
            <button>Comparison</button>
          </Link>
        </div>

      </div>
    </>
  );
};

export default Sidebar;