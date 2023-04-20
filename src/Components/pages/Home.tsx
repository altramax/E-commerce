import Navbar from "../Templates/Navbar"
import Footer from "../Templates/Footer"
import Header from "../Templates/Header"
import suit from "./assets/suit.jpg"
import MapData from "../Resources/API/MapData"

const red = {BackgroundColor: "red"}

export default function Home (){
    return(
        <div>
            <Navbar/>
            <Header image={suit} h1="Feel" h2="Authentic" h3="Peace" co="#e0edf4"></Header>
             <MapData filter={16}/>
            <Footer/>
        </div>
    )
}