import axios from "axios";
import { useState } from "react";
import "./styles/Data.scss"

export default function MapData() {
  type dataStructure = {
    title: string;
    category: string;
    description: string;
    image: string;
    price: string;
    rating: { rate: number };
    id: number;
  };

  const [data, setData] = useState<dataStructure[] | null>();

  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setData(res.data))
    .catch((res) => console.log(res.message));

  return (
    <div className="CardGroup">
      {data &&
        data.map((res, i) => {
         if(i < 9){
            return (
              <div className="CardContainer" key={res.id}>
                <img src={res.image} alt="" />
                <h2>{res.title}</h2>
                {/* <p>{res.category}</p> */}
                {/* <p>{res.description}</p> */}
                {/* <p>{res.rating.rate}</p> */}
              </div>
            );
         }
        })}
    </div>
  );
}
