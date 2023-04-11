import Navbar from "../Resources/Navbar";
import MapData from "../Resources/MapData";
import Footer from "../Resources/Footer";
import Note from "../Resources/NoteArea";

export default function MarketPlace() {
  const info =
    `Hola! We’re so excited you are a part of 
    OneStore. We love all our customers, and that includes you too!`;
  return (
    <div>
      <Navbar />
      <Note text={info} />
      <MapData filter={23} />
      <Footer />
    </div>
  );
}
