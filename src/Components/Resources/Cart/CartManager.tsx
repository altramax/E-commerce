import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CartManager.scss";
import Discount from "../Prices/Discount";
import NewPrice from "../Prices/NewPrice";
// import Subtotal from "../Prices/SubTotal";
// import Subtotal from "../Prices/SubTotal";

type getStructure = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: number;
};

export default function CartManager() {
  const [data, setData] = useState<getStructure[] | null>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => err);
  },[]);

  return (
    <div className="CartGroup">
      {data &&
        data.map((res) => {
          return (
            <div key={res.id} className="CartCard">
              <Discount value={res.price}/>
              <img src={res.img} alt="Product Image" />
              <h2>{res.name.slice(0, 36)}</h2>
              <h2>Quantity : {res.quantity}</h2>
              <div>
                <h3 className="oldPrice">${res.price}</h3>
                <h2>${<NewPrice value={res.price}/>}</h2>
              </div>
                {/* {res && <Subtotal value={res.price} quantity={res.quantity}/>} */}
            </div>
          );
        })}
    </div>
  );
}
