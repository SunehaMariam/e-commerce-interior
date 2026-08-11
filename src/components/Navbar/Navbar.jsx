
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import account from "../../assets/images/account.png";
import search from "../../assets/images/search.png";
import heart from "../../assets/images/heart.png";
import cart from "../../assets/images/cart.png";

import '../Navbar/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Logo" />
        <h1 className="Furniro">Furniro</h1>
      </Link>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/shop" className="nav-link" onClick={closeMenu}>
          Shop
        </Link>

        <Link to="/products" className="nav-link" onClick={closeMenu}>
          Products
        </Link>

        <Link to="/cartmain" className="nav-link" onClick={closeMenu}>
          Cart
        </Link>

        <Link to="/compare" className="nav-link" onClick={closeMenu}>
          Compare
        </Link>

        <Link to="/checkout" className="nav-link" onClick={closeMenu}>
          Checkout
        </Link>

        <Link to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </Link>

        <Link to="/blog" className="nav-link" onClick={closeMenu}>
          Blog
        </Link>

      </div>

      {/* Icons */}
      <div className="nav-icons">

        <img src={account} alt="account" />
        <img src={search} alt="search" />
        <img src={heart} alt="heart" />

        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>

      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
};

export default Navbar;

