import Navbar from "../Resources/Navbar";
import Footer from "../Resources/Footer";
import Header from "../Resources/Header";
import women from "./assets/women.jpg";

export default function WomenWear() {
  return (
    <div>
      <Navbar></Navbar>
      <Header
        h1="Home"
        h2="For All"
        h3="Brands"
        image={women}
        co="#BF9B7A"
      ></Header>
      <Footer></Footer>
    </div>
  );
}
