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
            alt="oversized-t-shirts"
            onClick={() => navigate("/oversizedtshirts")}
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-1735907918.jpg"
            alt="jeans"
            onClick={() => navigate("/jeans")}
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Men--1--1735908077.jpg"
            alt="shirts"
            onClick={() => navigate("/shirts")}
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Msite-Trending-Category-Icon-joggers--2--1736157469.jpg"
            alt="cargos"
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Classic-Fit-T-Shirts-1735907878.jpg"
            alt="tshirts"
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-1735907894.jpg"
            alt="hoodies"
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweatshirts-1735907896.jpg"
            alt="sweatshirts"
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Jackets-Trending-Category-Icon-1736162737.jpg"
            alt="jackets"
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/sliders-1731393266.jpg"
            alt="sliders"
          />
        </div>
      </div>
    </>
  );
};
export default ShopbyCategoryMen;
