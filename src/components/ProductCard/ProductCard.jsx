
import React from "react";
import "../ProductCard/ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  oldPrice,
  isNew,
  discount,
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Product open karne ke liye
const handleProductClick = () => { navigate(`/product/${id}`, { state: { image: image, name: name, price: price, description: description, }, }); };

  const handleAddToCart = (e) => {

    // Card click ko rokta hai
    e.stopPropagation();

    const numericPrice = Number(
      String(price).replace(/[^0-9]/g, "")
    );

    addToCart({
      id,
      image,
      name,
      price: numericPrice,
      quantity: 1,
    });

    navigate("/cart");
  };

  return (
    <div
      className="spc-card"
      onClick={handleProductClick}
    >

      {/* Product Image */}
      <div className="spc-image">

        <img src={image} alt={name} />

        {/* Badge */}
        <div className="spc-badge-group">

          {discount && (
            <span className="spc-badge spc-badge-discount">
              {discount.startsWith("-")
                ? discount
                : `-${discount}`}
            </span>
          )}

          {isNew && (
            <span className="spc-badge spc-badge-new">
              New
            </span>
          )}

        </div>

        {/* Hover Overlay */}
        <div className="spc-overlay">

          <button
            className="spc-cart-btn"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>

          <div className="spc-actions">
            <span>↗ Share</span>
            <span>⇄ Compare</span>
            <span>♡ Like</span>
          </div>

        </div>

      </div>

      {/* Product Information */}
      <div className="spc-content">

        <h3 className="spc-title">
          {name}
        </h3>

        <p className="spc-description">
          {description}
        </p>

        <div className="spc-price-box">

          <span className="spc-price-current">
            {price}
          </span>

          {oldPrice && (
            <del className="spc-price-old">
              {oldPrice}
            </del>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProductCard;
