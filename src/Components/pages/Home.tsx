import Navbar from "../Resources/Navbar"
import Footer from "../Resources/Footer"
import Header from "../Resources/Header"
import suit from "./assets/suit.jpg"
import MapData from "../Resources/MapData"

const red = {BackgroundColor: "red"}

export default function Home (){
    return(
        <div>
            <Navbar></Navbar>
            <Header image={suit} h1="Feel" h2="Authentic" h3="Peace" co="#e0edf4"></Header>
             <MapData></MapData>
            <Footer></Footer>
        </div>
    )
}