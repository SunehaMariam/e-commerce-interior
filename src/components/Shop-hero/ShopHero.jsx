import React from "react";
import "./ShopHero.css";
import ShopHero1 from "../../assets/images/ShopHero1.png";
import arrow from "../../assets/images/arrow.png";

const ShopHero = ({title,currpage}) => {
  return (
    <section className="shopHero">
      <img src={ShopHero1} alt="Shop Hero" className="heroImage" />

      <div className="heroContent">
        <h1>{title}</h1>

        <div className="breadcrumb">
          <h2>Home</h2>

          <img src={arrow} alt="arrow" />

          <h3>{currpage}</h3>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
