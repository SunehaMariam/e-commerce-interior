import React from "react";
import "../Banner/Banner.css"
import trophy from "../../assets/images/trophy.png";
import guarantee from "../../assets/images/guarantee.png";
import shipping from "../../assets/images/shipping.png";
import customerSupport from "../../assets/images/customerSupport.png";
const Banner = () => {
  return (
    <>
   <div className="Banner-box">
  <div className="Banner-item">
    <img src={trophy} alt="" />
    <div className="Banner-text">
      <h1>High Quality</h1>
      <h3>Crafted from top materials</h3>
    </div>
  </div>

  <div className="Banner-item">
    <img src={guarantee} alt="" />
    <div className="Banner-text">
      <h1>Warranty Protection</h1>
      <h3>Over 2 years</h3>
    </div>
  </div>

  <div className="Banner-item">
    <img src={shipping} alt="" />
    <div className="Banner-text">
      <h1>Free Shipping</h1>
      <h3>Order over 150 $</h3>
    </div>
  </div>

  <div className="Banner-item">
    <img src={customerSupport} alt="" />
    <div className="Banner-text">
      <h1>24/7 Support</h1>
      <h3>Dedicated support</h3>
    </div>
  </div>
</div></>
  );
};

export default Banner;
