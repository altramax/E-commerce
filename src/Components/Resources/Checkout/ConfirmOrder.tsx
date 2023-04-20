import check from "../assets/check.svg";
import { CSVLink } from "react-csv";

type propstype = {
  firstName: string | undefined;
  lastName: string | undefined;
  delivery: string | undefined;
  // method: string
};
export default function Confirm(props: propstype) {

const data = [
    [ "Names"],
    [props.firstName, props.lastName],
    [ "Address" ],
    [props.delivery]
]

  return (
    <div className="ConfirmOrder">
      <img src={check} alt="" />
      <h2>Name</h2>
      <div>
        <h3>{props.firstName}</h3>
        <h3>{props.lastName}</h3>
      </div>
      <div>
        <h2>Delivery Address</h2>
        <h3>{props.delivery}</h3>
      </div>
      <div>
        <h2>Payment Method</h2>
        <h3>Payment On Delivery</h3>
      </div>
      <CSVLink data={data} id="button" onClick={()=>{
window.location.replace("/")
      }}>Download Receipt</CSVLink>
    </div>
  );
}
