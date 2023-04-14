import "./styles/Navbar.scss";
import { Link, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import hamburger from "./assets/hamburger.svg";
import cancle from "./assets/cancle.svg";
import cart from "./assets/cart.png";

type Customtype = {
  children: {} | any;
  className: string;
  path: string;
};

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [img, setImg] = useState<boolean>(true);

  const dropdownHandler = () => {
    setToggle(!toggle);
    setImg(!img);
  };

  return (
    <div className="NavContainer">
      <div>
        <CustomLink path="/" className="Logo">
          OneStore
        </CustomLink>
      </div>

      <div id="linkGroup" className={toggle ? "linkgroup" : "hidden"}>
        <CustomLink path="/MenWear" className="Link">
          Men
        </CustomLink>
        <CustomLink path="/WomenWear" className="Link">
          Women
        </CustomLink>
        <CustomLink path="/MarketPlace" className="Link">
          Market
        </CustomLink>
      </div>
      <div
        className={toggle ? "overlay" : "hidden"}
        onClick={dropdownHandler}
      ></div>
      <div className="carthan">
        <img
          src={img ? hamburger : cancle}
          alt=""
          className="hamburger"
          onClick={dropdownHandler}
        />
        <CustomLink path="/Cart" className="Link">
          <p className="cartNotificationIcon">6</p>
          <img src={cart} alt="Cart" className="cart" />
        </CustomLink>
      </div>
    </div>
  );
}

function CustomLink(props: Customtype) {
  const resolvedpath = useResolvedPath(props.path);
  return (
    <Link to={props.path} {...props}>
      {props.children}
    </Link>
  );
}
