import Navbar from "../Templates/Navbar"
import Footer from "../Templates/Footer"
import HomeHeader from "../Templates/HomeManager"

const red = {BackgroundColor: "red"}

export default function Home (){
    return(
        <div>
            <Navbar/>
             <HomeHeader></HomeHeader>
            <Footer/>
        </div>
    )
}