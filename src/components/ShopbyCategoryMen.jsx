import "../css/shopbycategorymen.css";
import { useNavigate } from "react-router-dom";

const ShopbyCategoryMen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="shopbycategorymen-title">
          <p>Shop by Category-Men</p>
        </div>
        <div className="shopbycategorymen-cards">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-1735907878.jpg"
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/oversizedtshirts")}
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-1735907918.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-1735907894.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Msite-Trending-Category-Icon-joggers--2--1736157469.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Men--1--1735908077.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/sliders-1731393266.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Classic-Fit-T-Shirts-1735907878.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweatshirts-1735907896.jpg"
            alt=""
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Jackets-Trending-Category-Icon-1736162737.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default ShopbyCategoryMen;
