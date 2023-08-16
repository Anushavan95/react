import axios from "axios";
import React, { useState, useEffect } from "react";
import Layout from "./Components/layout";
import Cart from "./Components/Cart";
import { ProductConext, productConext } from "./context/productContext";
import Login from "./Components/Login";
import Sign from "./Components/Sign";
import AuthContext from "./context/AuthContext";
import { FetchContext } from "./context/FetchContext";

export default function App() {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [price, setprice] = useState(0);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setproducts(res.data);
    });
  }, []);
  const addProduct = (item) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  };
  let values = {
    cart,
    products,
    addProduct
  };
  let obj = {
    item: 'keys',
    products
  }
  return (
    <FetchContext.Provider value={obj}>
      <AuthContext>
        <Login />
        <Sign />
        {/* <Layout  /> */}

      </AuthContext>

      <ProductConext.Provider value={values}>
        <Layout  />
        <Cart />
      </ProductConext.Provider>
    </FetchContext.Provider>
  );
}
