import "./styles/Header.scss";
import { useState } from "react"

type Formate = {
  h1: string,
  h2: string,
  h3: string,
  image: string,
  co: string
};


// const changeColor=

export default function Header(props: Formate) {
  const [change, setChange] = useState<{}>()
  return (
    <div style={change} className="Container" onLoad={()=>{
      setChange({backgroundColor: props.co})
   }}>
      <div className="headerText">
        <h1>{props.h1}</h1>
        <h1>{props.h2}</h1>
        <h1>{props.h3}</h1>
      </div>
      <div className="imgGroup">
        <img src={props.image} alt="" className="img"/>
      </div>
    </div>
  );
}
