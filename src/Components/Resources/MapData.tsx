import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/MapData.scss";
import LazyLoading from "./LazyLoading";
import Modal from "./Modal";
import AddToCart from "./AddToCart";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

type propsType = {
  filter: number;
};

type dataStructure = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number };
  id: number;
  modal: JSX.Element;
};

export default function MapData(props: propsType) {
  const [data, setData] = useState<dataStructure[] | null>();
  const [display, setDisplay] = useState<JSX.Element | null>();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((res) => console.log(res.message));
  }, []);

  const cancleHandler = () => {
    setDisplay(null);
  };

  const modalHandler = (info: dataStructure) => {
    {
      data &&
        data.map((sub) => {
          if (sub.id === info.id) {
            {
              sub.modal = (
                <Modal
                  name={sub.title}
                  img={sub.image}
                  price={sub.price}
                  cancle={cancleHandler}
                  category={sub.category}
                  rating={
                    sub.rating.rate < 4 ? (
                      <div>
                        <BsStarFill color="orange" size={25} />
                        <BsStarFill  color="orange" size={25} />
                        <BsStarFill  color="orange" size={25} />
                        <BsStarHalf  color="orange" size={25} />
                        <BsStar  color="orange" size={25} />
                      </div>
                    ) : (
                      <div>
                         <BsStarFill color="orange" size={25} />
                        <BsStarFill  color="orange" size={25} />
                        <BsStarFill  color="orange" size={25} />
                        <BsStarFill  color="orange" size={25} />
                        <BsStarFill  color="orange" size={25} />
                      </div>
                    )
                  }
                  description={sub.description}
                ></Modal>
              );
            }
            setDisplay(sub.modal);
          }
        });
    }
  };

  return (
    <div className="CardGroup">
      {display}
      {data ? (
        data.map((res, i) => {
          if (i < props.filter) {
            return (
              <div className="CardContainer" key={res.id}>
                <div
                  onClick={() => {
                    modalHandler(res);
                  }}
                >
                  {res.price > 100 ? (
                    <p className="discount">-20%</p>
                  ) : (
                    <p className="discount">-10%</p>
                  )}
                  <img src={res.image} alt="cart image" />
                  <h2>{res.title.slice(0, 36)}</h2>
                  <h3>${res.price}</h3>
                </div>
                <AddToCart
                  title={res.title}
                  category={res.category}
                  description={res.description}
                  image={res.image}
                  price={res.price}
                  rating={res.rating}
                ></AddToCart>
              </div>
            );
          }
        })
      ) : (
        <LazyLoading />
      )}
    </div>
  );
}
