import { useEffect, useState } from "react";
// import { Fragment } from "react";
// import Checkout from "../Checkout/Checkout";
import axios from "axios";
import "../styles/SubTotal.scss";

type getStructure = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: number;
};

export default function Subtotal() {
  // const [display, setDisplay] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<number[]>([]);

  let url = "http://localhost:3000/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        res.data.map((props: getStructure) => {
          if (props.price > 100 && props.price < 200) {
            let w = props.quantity * (props.price - props.price * (15 / 100));
            setConfirm((e) => [...e, w]);
          } else if (props.price > 200) {
            let w = props.quantity * (props.price - props.price * (20 / 100));
            setConfirm((e) => [...e, w]);
          } else if (props.price < 100) {
            let w = props.quantity * (props.price - props.price * (10 / 100));
            setConfirm((e) => [...e, w]);
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // const checkoutHandler = () => {
  //   setDisplay(true);
  // };
  // const clearHandler = () => {
  //   setDisplay(false);
  // };

  return confirm
    // <Fragment>
      
                // confirm
        
      // {display && <Checkout func={clearHandler}></Checkout>}
    // </Fragment>
  // );
}


// <Fragment>
// {confirm.length > 0 &&
//   <div className="subTotalContainer">
//     <h3>CART SUMMARY</h3>
//     <div className="subTotal">
//       <h3>Subtotal</h3>
//       <h3>
//         $
//         {confirm
//           .reduce((a, b): number => {
//             return a + b;
//           }, 0)
//           .toFixed(2)}
//       </h3>
//     </div>
//     <h3 className="Checkout" onClick={checkoutHandler}>
//       CHECKOUT
//     </h3>
//   </div>
// }
// {display && <Checkout func={clearHandler}></Checkout>}
// </Fragment>