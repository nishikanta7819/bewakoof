import React from "react";
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div className="bewakoof-navbar">
      <div className="bewakoof-navbar-logo">
        <img
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt=""
        />
      </div>
      <div className="bewakoof-navbar-search">
        <input type="search" placeholder="Search by products" />
        <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
