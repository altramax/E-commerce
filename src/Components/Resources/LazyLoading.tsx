import "./styles/LazyLoading.scss";
import load from "./assets/load.png";

export default function LazyLoading() {
  return (
    <div className="CardGroup">
      <div className="CardContainer">
        <div className="reloadContainer LazyColor">
          <img src={load} alt="" id="lazy" className="reload" />
        </div>
        <h2 className="lazyName LazyColor"></h2>
        <h3 className="lazyPrice LazyColor"></h3>
      </div>
      <div className="CardContainer">
        <div className="reloadContainer LazyColor">
          <img src={load} alt="" id="lazy" className="reload" />
        </div>
        <h2 className="lazyName LazyColor"></h2>
        <h3 className="lazyPrice LazyColor"></h3>
      </div><div className="CardContainer">
        <div className="reloadContainer LazyColor">
          <img src={load} alt="" id="lazy" className="reload" />
        </div>
        <h2 className="lazyName LazyColor"></h2>
        <h3 className="lazyPrice LazyColor"></h3>
      </div><div className="CardContainer">
        <div className="reloadContainer LazyColor">
          <img src={load} alt="" id="lazy" className="reload" />
        </div>
        <h2 className="lazyName LazyColor"></h2>
        <h3 className="lazyPrice LazyColor"></h3>
      </div><div className="CardContainer">
        <div className="reloadContainer LazyColor">
          <img src={load} alt="" id="lazy" className="reload" />
        </div>
        <h2 className="lazyName LazyColor"></h2>
        <h3 className="lazyPrice LazyColor"></h3>
      </div><div className="CardContainer">
        <div className="reloadContainer LazyColor">
          <img src={load} alt="" id="lazy" className="reload" />
        </div>
        <h2 className="lazyName LazyColor"></h2>
        <h3 className="lazyPrice LazyColor"></h3>
      </div>
    </div>
  );
}
