import Navbar from "../Templates/Navbar";
import Footer from "../Templates/Footer";
import Header from "../Templates/Header";
import men from "./assets/men.jpg";
import FilterData from "../Resources/FilterData";

export default function MenWear() {
  return (
    <div>
      <Navbar/>
      <Header
        h1="We'll"
        h2="Make You"
        h3="Exclusive!"
        image={men}
        co= "#afb4ae"
      ></Header>
      <FilterData filter="men's"/>
      <Footer/>
    </div>
  );
}
