import { useEffect, useState } from "react";
import { Fragment } from "react";
import Checkout from "../Checkout/Checkout";
import axios from "axios";
import "../styles/SubTotal.scss";
import empty from "../assets/empty.jpg"

type getStructure = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: number;
};

export default function Subtotal() {
  const [display, setDisplay] = useState<boolean>(false);
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

  const checkoutHandler = () => {
    setDisplay(true);
  };
  const clearHandler = () => {
    setDisplay(false);
  };

  return (
    <Fragment>
      <div className="subTotalContainer">
        {confirm.length > 0 ? (
          <div>
            <h2>CART SUMMARY</h2>
            <div className="subTotal">
              <h2>Subtotal</h2>
              <h2>
                $
                {confirm
                  .reduce((a, b): number => {
                    return a + b;
                  }, 0)
                  .toFixed(2)}
              </h2>
            </div>
            <h2 className="Checkout" onClick={checkoutHandler}>
              CHECKOUT
            </h2>
          </div>
        ) : (
          <img src={empty} alt="" className="emptyImage"/>
        )}
      </div>
      {display && <Checkout func={clearHandler}></Checkout>}
    </Fragment>
  );
}
