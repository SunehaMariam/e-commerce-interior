
    import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";
    const OrderSummary = () => {
  const navigate = useNavigate();

  const { cartItems, subtotal, clearCart } = useCart();

  const [payment, setPayment] = useState("bank");

  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Order placed successfully!");

    clearCart();

    navigate("/"); };
  return (
    <>

    <div className="order-summary">

      <div className="summary-header">
        <h3>Product</h3>
        <h3>Subtotal</h3>
      </div>

      {cartItems.map((item) => (
        <div className="summary-item" key={item.id}>
          <p>
            {item.name}
            <span> × {item.quantity}</span>
          </p>

          <p>
            Rs. {(item.price * item.quantity).toLocaleString()}
          </p>
        </div>
      ))}

      <div className="summary-row">
        <span>Subtotal</span>
        <span>Rs. {subtotal.toLocaleString()}</span>
      </div>

      <div className="summary-row total">
        <span>Total</span>

        <span className="gold-2">
          Rs. {subtotal.toLocaleString()}
        </span>
      </div>

      <hr />

      <div className="payment">

        <label>
          <input
            type="radio"
            value="bank"
            checked={payment === "bank"}
            onChange={(e) => setPayment(e.target.value)}
          />

          Direct Bank Transfer
        </label>

        <p className="payment-text">
          Make your payment directly into our bank account.
          Please use your Order ID as the payment reference.
          Your order will not be shipped until the funds
          have cleared in our account.
        </p>

        <label>
          <input
            type="radio"
            value="cod"
            checked={payment === "cod"}
            onChange={(e) => setPayment(e.target.value)}
          />

          Cash On Delivery
        </label>

      </div>

      <p className="privacy">
        Your personal data will be used to support your
        experience throughout this website and for other
        purposes described in our privacy policy.
      </p>

      <button
        className="place-order"
        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>
    
    </>
  )
}

export default OrderSummary
