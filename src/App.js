import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./components/Products.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3)

  useEffect(() => {
    axios.get(`http://localhost:8080/products`)
      .then(data => {
        setProducts(data.data);
        //console.log(data);
      })
      .catch(err => console.log(err));
  }, [])



  return (<div>
    <Products
      products={products}
      setProducts={setProducts}
      item={item}
      setItem={setItem}
      page={page}
      setPage={setPage}
      limit={limit}
      setLimit={setLimit}
    ></Products>
  </div>);
};

export default App;
