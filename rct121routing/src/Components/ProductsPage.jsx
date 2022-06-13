import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductsPage() {
  const [data, setData] = useState([]);
  const [loading, setLaoding] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLaoding(true);
    axios({
      url: `http://localhost:3000/items/${params.id}`,
      method: "GET"
    })
      .then((res) => {
        setLaoding(false);
        setData(res.data);
      })
      .catch((err) => {
        setLaoding(false);
      });
  }, [params.id]);

  return (
    <div>
      {loading && <div>...loading</div>}
      <div>Name : {data?.name}</div>
      <div>Price : {data?.price}</div>
    </div>
  );
}
export default ProductsPage;
