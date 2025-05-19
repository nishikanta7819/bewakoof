import React from "react";
import "../css/oversizedtshirts.css";
import OversizedtshirtCard from "./OversizedtshirtCard";

const Oversizedtshirts = () => {
  const Oversizedtshirtsdata = [
    {
      id: 1,
      image:
        "https://images.bewakoof.com/t1080/men-s-green-master-88-graphic-printed-oversized-t-shirt-575358-1717060472-1.jpg",
      title: "Men's Green Master 88 Graphic Printed Oversized T-shirt",
      originalprice: "1499",
      discountedprice: "449",
      discountpercentage: "70% off",
    },
    {
      id: 2,
      image:
        "https://images.bewakoof.com/original/men-s-blue-let-me-take-a-selfie-graphic-printed-oversized-t-shirt-577416-1734699036-1.jpg",
      title: "Men's Blue Let Me Take A Selfie Graphic Printed Oversized T-shirt",
      originalprice: "1499",
      discountedprice: "249",
      discountpercentage: "83% off",
    },
    {
      id: 3,
      image:
        "https://images.bewakoof.com/t640/men-s-grey-eternity-graphic-printed-oversized-t-shirt-596129-1735645993-1.jpg",
      title: "Men's Grey Eternity Graphic Printed Oversized T-shirt",
      originalprice: "999",
      discountedprice: "349",
      discountpercentage: "65% off",
    },
    {
      id: 4,
      image:
        "https://images.bewakoof.com/original/men-s-grey-skater-donald-graphic-printed-oversized-t-shirt-602558-1688380650-1.jpg",
      title: "Men's Grey Skater Donald Graphic Printed Oversized T-shirt",
      originalprice: "1299",
      discountedprice: "339",
      discountpercentage: "69% off",
    },
    {
      id: 5,
      image:
        "https://images.bewakoof.com/t1080/men-s-white-flame-hashira-graphic-printed-oversized-t-shirt-602543-1726230895-1.jpg",
      title: "Men's White Flame Hashira Graphic Printed Oversized T-shirt",
      originalprice: "1299",
      discountedprice: "499",
      discountpercentage: "61% off",
    },
    {
      id: 6,
      image:
        "https://images.bewakoof.com/t1080/men-s-blue-the-dark-knight-graphic-printed-oversized-t-shirt-592034-1716887382-1.jpg",
      title: "Men's Blue The Dark Knight Graphic Printed Oversized T-shirt",
      originalprice: "1499",
      discountedprice: "379",
      discountpercentage: "74% off",
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
