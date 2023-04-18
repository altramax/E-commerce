import { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import "../styles/SubTotal.scss"

type getStructure = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: number;
};

const arr: number[] = [];
export default function Subtotal() {
  const [data, setData] = useState<getStructure[] | null>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        // console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    data &&
      data.map((props: getStructure) => {
        if (props.price > 100 && props.price < 200) {
          console.log("below 200");
          arr.push(props.quantity * (props.price - props.price * (15 / 100)));
          // console.log(arr);
        } else if (props.price > 200) {
          console.log("above 200");
          arr.push(props.quantity * (props.price - props.price * (20 / 100)));
          // console.log(arr);
        } else if (props.price < 100) {
          console.log("below 100");
          arr.push(props.quantity * (props.price - props.price * (10 / 100)));
          // console.log(arr);
        }
      });
  });

  return (
    <Fragment>
   <div className="subTotalContainer">
     {data ? <div>
        <h2>CART SUMMARY</h2>
        <div className="subTotal">
            <h2>Subtotal</h2>
            <h2>
            ${arr
            .reduce((a, b): number => {
              return a + b;
            }, 0)
            .toFixed(2)}
            </h2>
         
        </div>
        <h2 className="Checkout">CHECKOUT</h2>
        </div>
       : "Loading"}
       </div>
    </Fragment>
  );
}
