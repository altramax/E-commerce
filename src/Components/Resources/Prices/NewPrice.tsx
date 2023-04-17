import { Fragment, useState, useEffect } from "react";

type propType = {
  value: number;
};

export default function NewPrice(props: propType) {
 const [currentprice, setCurrentPrice] = useState<number>(0);
  
useEffect(()=>{
    if (props.value > 100 && props.value < 200) {
        // console.log("within 100");
       setCurrentPrice(props.value - (props.value * (15 / 100)));
      } else if (props.value > 200) {
        // console.log("above 200");
       setCurrentPrice(props.value - (props.value * (20 / 100)));
      } else {
        // console.log("below 100");
        setCurrentPrice(props.value - (props.value * (10 / 100)));
      }
}, [])
    return (
      <Fragment >
          {currentprice.toFixed(2)}
      </Fragment>
    );
   }  
    // if (props.value > 100 && props.value < 200) {
    //     let Price = props.value - props.value * (15 / 100);
    //     let Total = Price * props.quantity
    //       TotalPriceArray.push(Total)
    //         return (
    //           <Fragment>
    //             <h3>${Price.toFixed(2)}</h3>
    //             <h2>${Total.toFixed(2)}</h2>
    //             <h1>{TotalPriceArray.reduce((a, b) => {
    //         return a + b;
    //       }, 0)}</h1>
    //           </Fragment>
    //         );
    //       } else if (props.value > 200) {
    //         let Price = props.value - props.value * (20 / 100);
    //         let Total = Price * props.quantity
    //         TotalPriceArray.push(Total)
    //         return (
    //           <Fragment>
    //             <h3>${Price.toFixed(2)}</h3>
    //             <h2>${Total.toFixed(2)}</h2>
    //             <h1>{TotalPriceArray.reduce((a, b) => {
    //         return a + b;
    //       }, 0)}</h1>
    //           </Fragment>
    //         );
    //       } else {
    //         let Price = props.value - props.value * (10 / 100);
    //         let Total = Price * props.quantity
    //         TotalPriceArray.push(Total)
    //         return (
    //           <Fragment>
    //             <h3>${Price.toFixed(2)}</h3>
    //             <h2>${Total.toFixed(2)}</h2>
    //             <h1>{TotalPriceArray.reduce((a, b) => {
    //         return a + b;
    //       }, 0)}</h1>
    //           </Fragment>
    //         );
    //       }
      


