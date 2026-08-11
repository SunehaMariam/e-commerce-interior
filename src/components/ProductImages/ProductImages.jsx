
import "../ProductImages/ProductImages.css"
import ProductImage1 from "../../assets/images/ProductImage1.png"
import ProductImage2 from "../../assets/images/ProductImage2.png"
import ProductImage3 from "../../assets/images/ProductImage3.png"
import ProductImage4 from "../../assets/images/ProductImage4.png"
import ProductImage5 from "../../assets/images/ProductImage5.png"
import { useCart } from "../context/CartContext"
import star from "../../assets/images/star.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";




const ProductImages = () => {

  // NEW
  const { id } = useParams();
const location = useLocation(); const product = location.state;
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
  <>
  <div className="Sofa">


 <div className="ProductImages"> <img src={product?.image || ProductImage1} alt={product?.name || ""} /> <img src={product?.image || ProductImage2} alt={product?.name || ""} /> <img src={product?.image || ProductImage3} alt={product?.name || ""} /> <img src={product?.image || ProductImage4} alt={product?.name || ""} /> </div>


 <img src={product?.image || ProductImage5} alt={product?.name || ""} />


  
    <div className="productInfo">


  <h1>{product?.name || "Asgaard sofa"}</h1>

<h2>{product?.price || "Rs. 250,000.00"}</h2>


      {/* Rating */}
      <div className="rating">


        <div className="stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>


        <span>|</span>


        <p>5 Customer Review</p>


      </div>


      {/* Description */}


    <p className="description">
  {product?.description ||
    "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."}
</p>


      {/* Size */}


      <p className="title">Size</p>


      <div className="sizes">


        <button
          className={size === "L" ? "active" : ""}
          onClick={() => setSize("L")}
        >
          L
        </button>


        <button
          className={size === "XL" ? "active" : ""}
          onClick={() => setSize("XL")}
        >
          XL
        </button>


        <button
          className={size === "XS" ? "active" : ""}
          onClick={() => setSize("XS")}
        >
          XS
        </button>


      </div>


      {/* Colors */}


      <p className="title">Color</p>


      <div className="colors">


        <span
          className={`purple ${color === "purple" ? "selected" : ""}`}
          onClick={() => setColor("purple")}
        ></span>


        <span
          className={`black ${color === "black" ? "selected" : ""}`}
          onClick={() => setColor("black")}
        ></span>


        <span
          className={`gold ${color === "gold" ? "selected" : ""}`}
          onClick={() => setColor("gold")}
        ></span>


      </div>


      {/* Buttons */}


      <div className="buttons">


        <div className="quantity">


          <button
            onClick={() =>
              quantity > 1 && setQuantity(quantity - 1)
            }
          >
            -
          </button>


          <span>{quantity}</span>


          <button
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>


        </div>


<button
  className="cartBtn"
  onClick={() =>
    addToCart({
      id: id,
      name: "Asgaard Sofa",
      image: ProductImage5,
      price: 250000,
      quantity: quantity,
    })
  }
>
  Add To Cart
</button>


        <button className="compareBtn">
          + Compare
        </button>


      </div>


      <hr />


      {/* Product Details */}


      <div className="details">


        <p>
          <strong>SKU</strong> : SS001
        </p>


        <p>
          <strong>Category</strong> : Sofas
        </p>


        <p>
          <strong>Tags</strong> : Sofa, Chair, Home, Shop
        </p>


        <div className="share">


          <strong>Share :</strong>


          <img src={facebook} alt="Facebook" />


          <img src={linkedin} alt="LinkedIn" />


          <img src={twitter} alt="Twitter" />


        </div>


      </div>


    </div>
    </div>
  </>
  )
}


export default ProductImages

