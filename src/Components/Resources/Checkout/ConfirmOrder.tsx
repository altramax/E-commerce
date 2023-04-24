import { CSVLink } from "react-csv";
import { MdCloudDownload } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

type propstype = {
  firstName: string | undefined;
  lastName: string | undefined;
  delivery: string | undefined;
  subtotal: any;
};

export default function Confirm(props: propstype) {
  const data = [
    ["Names"],
    [props.firstName, props.lastName],
    ["Address"],
    [props.delivery],
    ["Total"],
    [props.subtotal],
  ];

  return (
    <div className="ConfirmOrder">
      <GiCheckMark size={30} color="green" />
      <h3>Name</h3>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <div>
        <h3>Delivery Address</h3>
        <p>{props.delivery}</p>
      </div>
      <div>
        <h3>Payment Method</h3>
        <p>Payment On Delivery</p>
      </div>
      <div>
        <h3>SubTotal</h3>
        <p>${props.subtotal}</p>
      </div>
      <div id="downloadButton">
        <CSVLink
          data={data}
          id="downloadLink"
          onClick={() => {
            window.location.replace("/");
            window.location.reload();
          }}
        >
          Download Receipt
        </CSVLink>
        <MdCloudDownload size={30} color="white" />
      </div>
    </div>
  );
}
