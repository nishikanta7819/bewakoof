import React from "react";
import "../css/banner.css";

const Banner = () => {
  return (
    <>
      <div className="bewakoof-category">
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Shop-Her-Desktop-1736601327.gif"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Shop-Him-Desktop-1736601325.gif"
          alt=""
        />
      </div>
      <div className="freeshipping">
        <div className="freeshipping-banner">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10053/10053655.png"
            alt=""
          />
          <p>FREE SHIPPING on all orders above 399/-</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
