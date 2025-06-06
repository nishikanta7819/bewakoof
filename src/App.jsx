import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import ShopbyCategoryMen from "./components/ShopbyCategoryMen";
import ShopbyCategoryWomen from "./components/ShopbyCategoryWomen";
import ShopbyFandom from "./components/ShopbyFandom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oversizedtshirts from "./components/Oversizedtshirts";
import Jeans from "./components/Jeans";
import Shirts from "./components/Shirts";

function Home() {
  return (
    <>
      <Banner />
      <Offers />
      <ShopbyCategoryMen />
      <ShopbyCategoryWomen />
      <ShopbyFandom />
    </>
  );
}
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oversizedtshirts" element={<Oversizedtshirts />} />
          <Route path="/jeans" element={<Jeans/>}/>
          <Route path="/shirts" element={<Shirts/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
