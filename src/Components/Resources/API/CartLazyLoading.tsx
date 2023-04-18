import LazyLoading from "./ProductsLazyLoading";
import { Fragment } from "react";
import load from "../assets/load.png";
import "../styles/CartLazyLoading.scss";

export default function CartLazyloading() {
  return (
    <Fragment>
      <div className="lazyCartCard">
          <div className="ImageandName">
            <div className="cartreloadImage LazyColor">
              <img src={load} alt="lazyImage" className="cartreload" />
            </div>
            <p className="cartlazyName LazyColor"></p>
            <div>
            <p className="cartlazyPrice LazyColor"></p>   
            <p className="cartlazyPrice LazyColor"></p>   
            </div>
          </div>
         <div className="lazyQuantity">
          <p className="cartlazyremove LazyColor"></p>   
          <p className="cartlazyremove LazyColor"></p>   
         </div>
        </div>
        <div className="lazyCartCard">
          <div className="ImageandName">
            <div className="cartreloadImage LazyColor">
              <img src={load} alt="lazyImage" className="cartreload" />
            </div>
            <p className="cartlazyName LazyColor"></p>
            <div>
            <p className="cartlazyPrice LazyColor"></p>   
            <p className="cartlazyPrice LazyColor"></p>   
            </div>
          </div>
         <div className="lazyQuantity">
          <p className="cartlazyremove LazyColor"></p>   
          <p className="cartlazyremove LazyColor"></p>   
         </div>
        </div>
        <div className="lazyCartCard">
          <div className="ImageandName">
            <div className="cartreloadImage LazyColor">
              <img src={load} alt="lazyImage" className="cartreload" />
            </div>
            <p className="cartlazyName LazyColor"></p>
            <div>
            <p className="cartlazyPrice LazyColor"></p>   
            <p className="cartlazyPrice LazyColor"></p>   
            </div>
          </div>
         <div className="lazyQuantity">
          <p className="cartlazyremove LazyColor"></p>   
          <p className="cartlazyremove LazyColor"></p>   
         </div>
        </div>
        
    </Fragment>
  );
}
