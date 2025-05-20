import React from "react";
import AllProducts from "../allproducts";
import JeansCard from "./JeansCard";
import '../css/products.css'

const Jeans = () => {
  const jeansData = AllProducts.filter((product) => product.type === "jeans");
  return (
    <div className="products">
      <div className="products-heading">
        <div className="products-title">
          <p>Denim Jeans for Men</p>
        </div>
        <div className="products-counts">
          <p>{jeansData.length} products</p>
        </div>
      </div>
      <div className="products-banner">
        <img
          src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2Fdesktop-denimversee_(2)_(1)-1747207068.jpg&w=1920&q=75"
          alt=""
        />
      </div>
      <div className="products-products">
        {jeansData.map((product) => {
          return <JeansCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Jeans;
