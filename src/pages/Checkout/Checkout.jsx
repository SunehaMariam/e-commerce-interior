
import Navbar from "../../components/Navbar/Navbar"
import ShopHero from '../../components/Shop-hero/ShopHero'
import Billing from '../../components/Billing/Billing'
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import "../../components/OrderSummary/OrderSummary.css"
import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
const Checkout = () => {
     const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
<>
<Navbar/>
<ShopHero
title="Checkout"
currpage="Checkout"

/>
 <div className="checkout-container">
 <Billing
        formData={formData}
        handleChange={handleChange}
       
      />
 <OrderSummary formData={formData} />
 </div>
 <Banner/>
 <Footer/>
</>
  )
}

export default Checkout
