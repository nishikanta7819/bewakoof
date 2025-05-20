import React from "react";
import "../css/oversizedtshirtcard.css";

const OversizedtshirtCard = ({ product }) => {
  return (
    <div className="oversizedtshirt-card">
      <div className="oversizedtshirt-card-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="oversizedtshirt-card-title">
        <p>{product.title}</p>
      </div>
      <div className="oversizedtshirt-card-price">
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
