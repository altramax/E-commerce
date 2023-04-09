import Navbar from "../Resources/Navbar"
import Footer from "../Resources/Footer"
import Header from "../Resources/Header"
import suit from "./assets/suit.jpg"


export default function Home (){
    return(
        <div>
            <Navbar></Navbar>
            <Header suit={suit} h1="Feel" h2="Authentic" h3="Peace"></Header>
            <Footer></Footer>
        </div>
    )
}