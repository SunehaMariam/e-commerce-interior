import React from "react";
import { useCart } from "../context/CartContext";
import deleteicon from "../../assets/images/deleteicon.png";
import "../CartPage/CartPage.css"
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
       const {
    cartItems,
    subtotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  return (
   <>

    <div className="cart-page">

      <div className="cart-table">

        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>

        {cartItems.map((item) => (
          <div className="cart-row" key={item.id}>

            <div className="product">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>

            <p>Rs. {item.price.toLocaleString()}</p>

            <div className="quantity">
              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>
            </div>

            <p>
              Rs. {(item.price * item.quantity).toLocaleString()}
            </p>

            <img
              src={deleteicon}
              alt="delete"
              className="delete"
              onClick={() => removeFromCart(item.id)}
            />

          </div>
        ))}

      </div>

      <div className="cart-total">

        <h2>Cart Totals</h2>

        <div className="total-row">
          <span>Subtotal</span>

          <span>
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="total-row">
          <span>Total</span>

          <span className="gold-1">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>
<button onClick={() => navigate("/checkout")}>
  Check Out
</button>

      </div>

    </div>
   
   
   </>
  )
}

export default CartPage
