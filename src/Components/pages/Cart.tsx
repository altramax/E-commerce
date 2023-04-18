import Navbar from "../Templates/Navbar";
import Footer from "../Templates/CartFooter";
import Note from "../Templates/NoteArea";
import CartManager from "../Resources/Cart/CartManager";
import Subtotal from "../Resources/Prices/SubTotal";

export default function Cart (){
    const header:string ="Welcome, Complete and checkout your order here" 
    return(<div>
        <Navbar></Navbar>
        <Note text={header}></Note>
        <CartManager/>
        {<CartManager/> &&  <Subtotal/>}
        <Footer/>
    </div>)
}