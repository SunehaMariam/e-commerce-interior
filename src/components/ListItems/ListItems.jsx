import React from "react";
import "../ListItems/ListItems.css";

const ListItem = ({
  title,
  labels,
  product1,
  product2,
  showButton = false,
}) => {
  return (
    <div className="List-items">
      <div className="List-item1">
        <h2 className="ListItem-head">{title}</h2>

        {labels.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>

      <div className="List-item1">
        {product1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

        {showButton && (
          <button className="compare-btn">Add To Cart</button>
        )}
      </div>

      <div className="List-item1">
        {product2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

        {showButton && (
          <button className="compare-btn">Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default ListItem;