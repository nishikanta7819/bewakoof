import React from "react";
import "../css/oversizedtshirts.css";
import OversizedtshirtCard from "./OversizedtshirtCard";

const Oversizedtshirts = () => {
  const Oversizedtshirtsdata = [
    {
      id: 1,
      image:
        "https://images.bewakoof.com/t640/men-s-brown-oversized-t-shirt-565938-1747030211-1.jpg",
      title: "Men's Brown Oversized T-shirt",
      originalprice: "999",
      discountedprice: "349",
      discountpercentage: "65% off",
    },
    {
      id: 2,
      image:
        "https://images.bewakoof.com/t640/men-s-brown-oversized-t-shirt-565938-1747030211-1.jpg",
      title: "Men's Brown Oversized T-shirt",
      originalprice: "999",
      discountedprice: "349",
      discountpercentage: "65% off",
    },
  ];
  return (
    <div className="oversizedtshirts">
      <div className="oversizedtshirts-heading">
        <div className="oversizedtshirts-title">
          <p>Oversized T Shirt Men</p>
        </div>
        <div className="oversizedtshirts-counts">
          <p>7819 Products</p>
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
