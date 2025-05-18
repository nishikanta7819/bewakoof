import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import ShopbyCategoryMen from "./components/ShopbyCategoryMen";
import ShopbyCategoryWomen from "./components/ShopbyCategoryWomen";
import ShopbyFandom from "./components/ShopbyFandom";

function App() {
  return <>
  <Navbar/>
  <Banner/>
  <Offers/>
  <ShopbyCategoryMen/>
  <ShopbyCategoryWomen/>
  <ShopbyFandom/>
  <Footer/>
  </>;
}

export default App;
