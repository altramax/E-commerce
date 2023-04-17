import Navbar from "../Templates/Navbar";
import Footer from "../Templates/Footer";
import Header from "../Templates/Header";
import women from "./assets/women.jpg";
import FilterData from "../Resources/API/FilterData";

export default function WomenWear() {
  return (
    <div>
      <Navbar/>
      <Header
        h1="Home"
        h2="For All"
        h3="Brands"
        image={women}
        co="#BF9B7A"
      ></Header>
      <FilterData filter="women's"/>
      <Footer/>
    </div>
  );
}
