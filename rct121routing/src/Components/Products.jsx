import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLaoding] = useState(true);

  useEffect(() => {
    setLaoding(true);
    axios({
      url: `http://localhost:3000/items/`,
      method: "GET"
    })
      .then((res) => {
        setLaoding(false);
        setData(res.data);
      })
      .catch((err) => {
        setLaoding(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>...loading</div>}
      <table border="1">
        <tr>
          <td>Product Name</td>
          <td>Price</td>
          <td>More Details</td>
        </tr>
        {data?.map((i) => (
          <tr>
            <td>{i.name}</td>
            <td>{i.price}</td>
            <Link to={`/products/${i.id}`}>
              <td>More Details</td>
            </Link>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Products;
