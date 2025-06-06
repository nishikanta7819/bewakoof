import React from "react";
import "../css/productcard.css";

const ShirtsCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-card-title">
        <p>{product.title}</p>
      </div>
      <div className="product-card-price">
        <span style={{ fontWeight: "bold" }}>₹{product.discountedprice}</span>{" "}
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          ₹{product.originalprice}
        </span>{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          {product.discountpercentage}
        </span>
      </div>
    </div>
  );
};

export default ShirtsCard;
