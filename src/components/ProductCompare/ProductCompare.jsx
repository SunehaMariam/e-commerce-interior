
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductImage5 from "../../assets/images/ProductImage5.png";
import Product2 from "../../assets/images/Product2.png";
import Shop1 from "../../assets/images/Shop1.png";
import Shop3 from "../../assets/images/Shop3.png";
import Shop4 from "../../assets/images/Shop4.png";

import star from "../../assets/images/star.png";
import "../ProductCompare/ProductCompare.css";


const ProductCompare = () => {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Asgaard Sofa",
      image: ProductImage5,
      price: "Rs. 250,000.00",
      rating: "4.7",
      reviews: "204 Review",
    },
    {
      id: 2,
      name: "Syltherine",
      image: Shop1,
      price: "Rp 2.500.000",
      rating: "4.5",
      reviews: "150 Review",
    },
    {
      id: 3,
      name: "Leviosa",
      image: Product2,
      price: "Rp 2.500.000",
      rating: "4.6",
      reviews: "180 Review",
    },
    {
      id: 4,
      name: "Lolito",
      image: Shop3,
      price: "Rp 7.000.000",
      rating: "4.8",
      reviews: "220 Review",
    },
    {
      id: 5,
      name: "Respira",
      image: Shop4,
      price: "Rp 500.000",
      rating: "4.4",
      reviews: "120 Review",
    },
  ];


  const [product1, setProduct1] = useState(products[0]);
  const [product2, setProduct2] = useState(products[1]);


  const handleProduct1 = (e) => {

    const selectedProduct = products.find(
      (product) => product.id === Number(e.target.value)
    );

    if (selectedProduct) {
      setProduct1(selectedProduct);
    }
  };


  const handleProduct2 = (e) => {

    const selectedProduct = products.find(
      (product) => product.id === Number(e.target.value)
    );

    if (selectedProduct) {
      setProduct2(selectedProduct);
    }
  };


  return (
    <>

      <div className="Compare">


        {/* Go to Product Page */}

        <div>

          <h1>
            Go to Product page <br />
            for more <br />
            Products
          </h1>

          <button
            onClick={() => navigate("/products")}
          >
            View more
          </button>

        </div>


        {/* PRODUCT 1 */}

        <div className="Compare-box1">

          <img
            src={product1.image}
            alt={product1.name}
            className="box-1-image"
          />

          <h2 className="box-1-head">
            {product1.name}
          </h2>

          <p className="box-1-head">
            {product1.price}
          </p>


          <div className="rating">

            <span className="rating-number">
              {product1.rating}
            </span>


            <span className="stars">

              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />

            </span>


            <span className="divider"></span>


            <span className="rating-number">
              {product1.reviews}
            </span>

          </div>

        </div>


        {/* PRODUCT 2 */}

        <div className="Compare-box1">

          <img
            src={product2.image}
            alt={product2.name}
            className="box-1-image"
          />

          <h2 className="box-1-head">
            {product2.name}
          </h2>

          <p className="box-1-head">
            {product2.price}
          </p>


          <div className="rating">

            <span className="rating-number">
              {product2.rating}
            </span>


            <span className="stars">

              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />

            </span>


            <span className="divider"></span>


            <span className="rating-number">
              {product2.reviews}
            </span>

          </div>

        </div>


        {/* CHOOSE PRODUCT */}

        <div className="choose-product">

          <h3>Choose a Product</h3>


          <select
            value={product1.id}
            onChange={handleProduct1}
          >

            <option value="">
              Select Product
            </option>

            {products.map((product) => (

              <option
                key={product.id}
                value={product.id}
              >
                {product.name}
              </option>

            ))}

          </select>


          <select
            value={product2.id}
            onChange={handleProduct2}
          >

            <option value="">
              Select Product
            </option>

            {products.map((product) => (

              <option
                key={product.id}
                value={product.id}
              >
                {product.name}
              </option>

            ))}

          </select>

        </div>


      </div>

    </>
  );
};


export default ProductCompare;

