import "./styles/Modal.scss";
import { Fragment } from "react";
import AddToCart from "./AddToCart";

type propsType = {
  img: string;
  name: string;
  price: number;
  cancle: any;
  description: string;
  rating: any;
  category: string;
};

export default function Modal(props: propsType) {
  return (
    <Fragment>
      <div className="overlayModal" onClick={props.cancle}></div>
      <div className="ModalContainer">
        {props.price > 100 ? (
          <p className="discount">-20%</p>
        ) : (
          <p className="discount">-10%</p>
        )}
        <div className="modalFlex">
          <div className="modalImageGroup">
            <div className="modalImage">
              <img src={props.img} alt="" />
            </div>
            <h2>{props.name}</h2>
            <p>{props.rating}</p>
            <h3>${props.price}</h3>
          </div>
          <div className="descriptionGroup">
            <h1>Description</h1>
            <h3>
              {props.category.at(0)?.toUpperCase() + props.category.slice(1)}
            </h3>
            <p>{props.description}</p>
            {props && (
              <AddToCart
                title={props.name}
                category={props.category}
                description={props.description}
                price={props.price}
                image={props.img}
                rating={props.rating}
              ></AddToCart>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
