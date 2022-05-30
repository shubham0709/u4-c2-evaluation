import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./components/Products.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [endPoint, setEndPoint] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8080/products/?_page=${page}&_limit=${limit}`)
      .then(data => {
        setProducts(data.data);
        console.log(data.headers["x-total-count"]);
        setEndPoint(Number(data.headers["x-total-count"]));
      })
      .catch(err => console.log(err));
  }, [page, limit])



  return (<div>
    <Products
      products={products}
      setProducts={setProducts}
      page={page}
      setPage={setPage}
      limit={limit}
      setLimit={setLimit}
      endPoint={endPoint}
      setEndPoint={setEndPoint}
    ></Products>
  </div>);
};

export default App;
