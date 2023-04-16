import { useState, useEffect } from "react";
import axios from "axios";
type getStructure = {
    id: number,
        name: string;
        img: string;
        price: number;
        quantity: number;
        rating: number;
    
};

export default function CartManager() {
  const [data, setData] = useState<getStructure[] | null>();

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setData(res.data);
    }).catch(err=>console.log(err))
  }, []);

  return (
    <div>
      {data &&
        data.map((res) => {
          return( <div key={res.id}>
              {res.price > 100 ? (        
                    <p className="discount">-20%</p>
                  ) : (
                    <p className="discount">-10%</p>
                  )}
                    <img src={res.img} alt="Product Image" />
                  <h2>{res.name.slice(0, 36)}</h2>
                  <h3>${res.name}</h3>
          </div>)
        })}
    </div>
  );
}
