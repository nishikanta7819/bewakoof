import React from "react";
import AllProducts from "../allproducts";
import "../css/oversizedtshirts.css";
import OversizedtshirtCard from "./OversizedtshirtCard";

const Oversizedtshirts = () => {
  const Oversizedtshirtsdata =  AllProducts.filter((product) => product.type === "oversized-tshirt");
  return (
    <div className="oversizedtshirts">
      <div className="oversizedtshirts-heading">
        <div className="oversizedtshirts-title">
          <p>Oversized T Shirts Men</p>
        </div>
        <div className="oversizedtshirts-counts">
          <p>{Oversizedtshirtsdata.length} products</p>
        </div>
      </div>
      <div className="oversizedtshirts-banner">
        <img
          src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2FInside-banner_1440x400_Desktop_(1)-1742379416.jpg&w=1920&q=75"
          alt=""
        />
      </div>
      <div className="oversizedtshirts-products">
        {Oversizedtshirtsdata.map((product) => {
          return <OversizedtshirtCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Oversizedtshirts;
