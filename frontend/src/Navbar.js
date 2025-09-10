import React from "react";

export default function Navbar({ onCartClick, cartCount }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img alt="logo" src="/images/logo.svg" width="36" height="36" />
        <div className="brand">Saree Store</div>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="cart-btn" onClick={onCartClick} aria-label="Open cart">
        🛒
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </header>
  );
}
