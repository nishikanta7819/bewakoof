import React from "react";
import "../css/products.css";

const OversizedtshirtCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-card-title">
        <p>{product.title}</p>
      </div>
      <div className="productcard-price">
        <span style={{ fontWeight: "bold" }}>₹{product.discountedprice}</span>{" "}
        <span style={{ textDecoration: "line-through",color:"gray" }}>
          ₹{product.originalprice}
        </span>{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          {product.discountpercentage}
        </span>
      </div>
    </div>
  );
};

export default OversizedtshirtCard;
