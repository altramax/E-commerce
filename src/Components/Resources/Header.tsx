import "./styles/Header.scss";

type Formate = {
  h1: string;
  h2: string;
  h3: string;
  suit: string;
};
export default function Header(props: Formate) {
  return (
    <div className="Container">
      <div className="headerText">
        <h1>{props.h1}</h1>
        <h1>{props.h2}</h1>
        <h1>{props.h3}</h1>
      </div>
      <div className="imgGroup">
        <img src={props.suit} alt="" className="img" />
      </div>
    </div>
  );
}
