import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CartManager.scss";
import Discount from "../Prices/Discount";
import NewPrice from "../Prices/NewPrice";
import ProductQantity from "./ProductQuantity";
import CartLazyloading from "../API/CartLazyLoading";
// import Subtotal from "../Prices/SubTotal";

type getStructure = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  rating: { rate: number };
  category: string;
  description: string;
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
  }, []);

  return (
    <div className="CartGroup">
      {/* <Subtotal></Subtotal> */}
      {data ? (
        data.map((res) => {
          return (
            <div key={res.id} className="CartCard">
              <div className="cartCardFlex">
                <img src={res.img} alt="Product Image" />
                <h3>{res.name.slice(0, 36)}</h3>
                <div className="PriceGroup">
                  <h2>${<NewPrice value={res.price} />}</h2>
                  <div className="OldpriceandDiscount">
                    <h4 className="oldPrice">${res.price}</h4>
                    <Discount value={res.price} />
                  </div>
                </div>
              </div>
              <ProductQantity id={res.id}></ProductQantity>
            </div>
          );
        })
      ) : (
        <CartLazyloading />
      )}
    </div>
  );
}
