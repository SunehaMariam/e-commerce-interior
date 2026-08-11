import React from "react";
import "./ShopFilter.css";

import filter from "../../assets/images/filter.png";
import grid from "../../assets/images/grid.png";
import view from "../../assets/images/view.png";

const ShopFilter = () => {
  return (
    <section className="shopFilter">
      <div className="filterLeft">
        <img src={filter} alt="Filter" />
        <span>Filter</span>

        <img src={grid} alt="Grid" className="icon" />
        <img src={view} alt="View" className="icon" />

        <div className="divider"></div>

        <p>Showing 1–16 of 32 results</p>
      </div>

      <div className="filterRight">
        <label>Show</label>
        <input type="text" value="16" readOnly />

        <label>Sort by</label>
        <input type="text" value="Default" readOnly />
      </div>
    </section>
  );
};

export default ShopFilter;