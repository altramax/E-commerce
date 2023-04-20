import { useState, Fragment } from "react";
import Subtotal from "../Prices/SubTotal";
import cancle from "../assets/cancle.svg";
import Confirm from "./ConfirmOrder";
import "../styles/Checkout.scss";

type proptype = {
  func: any;
};

export default function Checkout(props: proptype) {
  const [firstname, setFirstName] = useState<string>();
  const [lastname, setLastName] = useState<string>();
  const [delivery, setDelivery] = useState<string>();
  const [checkCard, setCheckcard] = useState<boolean>(false);
  const [checkCash, setCheckCash] = useState<boolean>(false);
  const [message, setMessage] = useState<any>();
  const [confirm, setConfirm] = useState<boolean>(false);

  const firstnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const deliveryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery(e.target.value);
  };

  const checkCardHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckcard(!checkCard);
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setMessage("Card Payment Not Available");
    } else {
      setMessage("");
    }
  };

  const checkCashHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckCash(!checkCash);
  };

  const confirmHandler = () => {
   
    if (
      checkCash === true &&
      checkCard === false &&
      firstname !== undefined &&
      lastname !== undefined &&
      delivery !== undefined
    ) {
      setConfirm(true);
    
    }
  };

  const clearHandler= ()=>{
    setConfirm(false)
  }
  

  return (
    <Fragment>
      <form action="" className="Form">
        <img
          src={cancle}
          alt="Cancle"
          className="cancleImage"
          onClick={props.func}
        />
        <h1>Delivery Information</h1>
        <div className="inputGroup">
          <label htmlFor="Fistname">First Name</label>
          <input
            id="firstname"
            type="text"
            onChange={firstnameHandler}
            value={firstname}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Fistname">Last Name</label>
          <input
            id="firstname"
            type="text"
            onChange={lastnameHandler}
            value={lastname}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Fistname">Delivery Address</label>
          <input
            id="firstname"
            type="text"
            onChange={deliveryHandler}
            value={delivery}
          />
        </div>
        <div className="PaymentGroup">
          <h2>SELECT A METHOD OF PAYMENT</h2>
          <div className="PaymentOptions">
            <span>Pay With Card</span>
            <input
              type="checkbox"
              checked={checkCard}
              onChange={checkCardHandler}
            />
            <h3>{message}</h3>
          </div>
          <div className="PaymentOptions">
            <span>Pay On Delivery</span>
            <input
              type="checkbox"
              checked={checkCash}
              onChange={checkCashHandler}
            />
          </div>
        </div>
        <div className="PaymentConfirmation">
          <Subtotal></Subtotal>
          <h2 onClick={confirmHandler} className="confirmText">Confirm Order</h2>
          {confirm && <Confirm firstName={firstname} lastName={lastname} delivery={delivery}></Confirm>}
        </div>
          {confirm && <div className="FormOverlay" onClick={clearHandler}></div>}
      </form>
    </Fragment>
  );
}
