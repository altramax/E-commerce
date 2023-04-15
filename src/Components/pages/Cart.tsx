import Navbar from "../Templates/Navbar";
import Footer from "../Templates/Footer";
import Note from "../Templates/NoteArea";
import CartManager from "../Resources/CartManager";

export default function Cart (){
    const header:string ="Welcome, Complete and checkout your order here" 
    return(<div>
        <Navbar></Navbar>
        <Note text={header}></Note>
        <h1>Cart</h1>
        <CartManager></CartManager>
        <Footer></Footer>
    </div>)
}