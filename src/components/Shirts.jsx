import React from "react";
import AllProducts from "../allproducts";
import ShirtsCard from "./ShirtsCard";
import "../css/products.css";

const Shirts = () => {
  const jeansData = AllProducts.filter((product) => product.type === "shirts");
  return (
    <div className="products">
      <div className="products-heading">
        <div className="products-title">
          <p>Casual Shirts for Men</p>
        </div>
        <div className="products-counts">
          <p>{jeansData.length} products</p>
        </div>
      </div>
      <div className="products-banner">
        <img
          src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2FShirts_Inside-Banner_Desktop_(1)-1740394266.jpg&w=1920&q=75"
          alt="shirt-banner"
        />
      </div>
      <div className="products-products">
        {jeansData.map((product) => {
          return <ShirtsCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shirts;
