import "./styles/AddToCart.scss"
import { useState } from "react";
import cart from "./assets/cart.png"



type dataStructure = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number }
}

export default function AddToCart(props:dataStructure){
  const [count, setCount] = useState<number>(0);

  const increaseHandler = (info: dataStructure) => {
         setCount(count + 1)
  };

  const decreaseHandler = (info:dataStructure) => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };


  return(
    
    <div className="addToCartGroup" onClick={()=>{
  
    }}>
                  <button>
                    Add To Cart <img src={cart} alt="" />
                  </button>
                  <div className="countGroup">
                    <span onClick={()=>{decreaseHandler(props)}} className="countButton">
                      -
                    </span>
                    <p className="counter">{count}</p>
                    <span onClick={()=>{increaseHandler(props)}} className="countButton">
                      +
                    </span>
                  </div>
                
    </div>
  )
}