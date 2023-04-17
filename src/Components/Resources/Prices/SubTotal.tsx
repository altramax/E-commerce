import { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";


type getStructure = {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
    rating: number;
  };

const arr: number[] = [];
export default function Subtotal() {
    const [data, setData] = useState<getStructure[] | null>();

    useEffect(() => {
      axios
        .get("http://localhost:3000/products")
        .then((res) => {
          setData(res.data);
          console.log("i loaded");
        })
        .catch((err) => err);
    },[]);


  useEffect(() => {
   data && data.map((props:getStructure)=>{
        if (props.price > 100 && props.price < 200) {
          console.log("below 200");
          arr.push(props.quantity * (props.price - props.price * (15 / 100)));
        } else if (props.price > 200) {
          console.log("above 200");
          arr.push(props.quantity * (props.price - props.price * (20 / 100)));
        } else if (props.price < 100) {
          console.log("below 100");
          arr.push(props.quantity * (props.price - props.price * (10 / 100)));
        }
    })
  })

  return (
    <Fragment>
      <h1>
        {arr.reduce((a, b): number => {
          return a + b;
        }, 0).toFixed(2)}
      </h1>
    </Fragment>
  );
}




// import { useEffect, useState } from "react";
// import { Fragment } from "react";

// type subType = {
//   value: number;
//   quantity: number;
// };

// const arr: number[] = [];
// export default function Subtotal(props: subType) {
    
//   useEffect(() => {
//     if (props.price > 100 && props.price < 200) {
//       console.log("below 200");
//       arr.push(props.quantity * (props.price - props.price * (15 / 100)));
//     } else if (props.price > 200) {
//       console.log("above 200");
//       arr.push(props.quantity * (props.price - props.price * (20 / 100)));
//     } else if (props.price < 100) {
//       console.log("below 100");
//       arr.push(props.quantity * (props.price - props.price * (10 / 100)));
//     }
//   },[]);
  
//   return (
//     <Fragment>
//       <h1>
//         {arr.reduce((a, b): number => {
//           return a + b;
//         }, 0)}
//       </h1>
//     </Fragment>
//   );
// }
