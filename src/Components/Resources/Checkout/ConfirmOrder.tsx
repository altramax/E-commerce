import { CSVLink } from "react-csv";
import { useState } from "react";
import axios from "axios";
import { MdCloudDownload } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

type propstype = {
  firstName: string | undefined;
  lastName: string | undefined;
  delivery: string | undefined;
  // method: string
};

type dataStructure = {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number };
  id: number;
};

export default function Confirm(props: propstype) {
  const [temp, setTemp] = useState<dataStructure>();

  const data = [
    ["Names"],
    [props.firstName, props.lastName],
    ["Address"],
    [props.delivery],
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
      <div id="downloadButton">
        <CSVLink
          data={data}
          id="downloadLink"
          onClick={() => {
            axios.get("http://localhost:3000/products").then((res) => {
              res.data.map((res: dataStructure) => {
                axios
                  .delete("http://localhost:3000/products/" + res.id)
                  .catch((err) => console.log(err));
              });
            });
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
