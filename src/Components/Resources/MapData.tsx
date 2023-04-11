import axios from "axios";
import { useState } from "react";
import "./styles/MapData.scss";
import LazyLoading from "./LazyLoading";

type propsType = {
  filter: number;
};
export default function MapData(props: propsType) {
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
      {data ?
        data.map((res, i) => {
          if (i < props.filter) {
            return (
              <div className="CardContainer" key={res.id}>
                <img src={res.image} alt="" />
                <h2>{res.title}</h2>
                <h3>${res.price}</h3>
              </div>
            );
          }
        }) : <LazyLoading/>}
    </div>
  );
}