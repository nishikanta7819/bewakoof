import React from "react";
import "../css/OversizedtshirtCard.css";

const OversizedtshirtCard = ({ product }) => {
  return (
    <div className="oversizedtshirt-card">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>
        <span style={{ fontWeight: "bold" }}>₹{product.discountedprice}</span>{" "}
        <span style={{ textDecoration: "line-through" }}>
          ₹{product.originalprice}
        </span>{" "}
        <span style={{ color: "green" }}>{product.discountpercentage}</span>
      </p>
    </div>
  );
};

export default OversizedtshirtCard;
