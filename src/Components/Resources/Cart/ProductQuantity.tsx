import { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

type quantity = {
  id: number;
};
export default function ProductQantity(props: quantity) {
  const [count, setCount] = useState<number>(0);
  const [depend, setDepend] = useState<boolean>(false);
  let uri = "http://localhost:3000/products/";

  useEffect(() => {
    axios
      .get(uri + props.id)
      .then((res) => {
        setCount(res.data.quantity);
      })
      .catch((err) => err);
  }, [depend]);

  const increaseHandler = () => {
    let g = count + 1;
    axios
      .patch(
        uri + props.id,
        {
          quantity: g,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .catch((err) => console.log(err));
    setDepend(!depend);
    window.location.reload();
  };

  const decreaseHandler = () => {
    if (count >= 1) {
      let g = count - 1;
      axios
        .patch(
          uri + props.id,
          {
            quantity: g,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .catch((err) => console.log(err));
    }
    setDepend(!depend);
    window.location.reload();
  };

  const removeProduct = () => {
    axios.delete(uri + props.id).catch((err) => console.log(err));
    setDepend(!depend);
    window.location.reload();
  };

  return (
    <div className="quantityGroup">
      <div className="removeProduct" onClick={removeProduct}>
        <MdDeleteOutline />
        REMOVE
      </div>
      <div className="CountGroup">
        <span
          onClick={() => {
            decreaseHandler();
          }}
          className="countButton"
        >
          -
        </span>
        <span className="counter">{count}</span>
        <span
          onClick={() => {
            increaseHandler();
          }}
          className="countButton"
        >
          +
        </span>
      </div>
    </div>
  );
}
