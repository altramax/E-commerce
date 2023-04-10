import Navbar from "../Resources/Navbar";
import Footer from "../Resources/Footer";
import Header from "../Resources/Header";
import men from "./assets/men.jpg";

export default function MenWear() {
  return (
    <div>
      <Navbar></Navbar>
      <Header
        h1="We'll"
        h2="Make You"
        h3="Exclusive!"
        image={men}
        co= "#afb4ae"
      ></Header>
      <Footer></Footer>
    </div>
  );
}
