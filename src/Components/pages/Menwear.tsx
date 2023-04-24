import Navbar from "../Templates/Navbar";
import Footer from "../Templates/Footer";
import DiscountHeader from "../Templates/DiscountHeader";
// import discount from "./assets/discount.png"
import FilterData from "../Resources/API/FilterData";

export default function MenWear() {
  return (
    <div>
      <Navbar/>
     <DiscountHeader></DiscountHeader>
      <FilterData filter="men's"/>
      <Footer/>
    </div>
  );
}
