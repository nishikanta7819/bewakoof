import React from "react";
import '../css/jeanscard.css'

const JeansCard = ({ product }) => {
  return (
    <div className="jeans-card">
      <div className="jeans-card-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="jeans-card-title">
        <p>{product.title}</p>
      </div>
      <div className="jeans-card-price">
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

export default JeansCard;
