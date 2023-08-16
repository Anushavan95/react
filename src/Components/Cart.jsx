import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ProductConext } from "../context/productContext";

export default function Cart() {
  const [count, setcount] = useState(0);
 const cartValue =  useContext(ProductConext)
  useEffect(() => {
    cartValue.cart.reduce((count, item) => {
      return setcount((prevcount) => (prevcount += item.price));
    }, count);
  }, [cartValue.cart]);
  return <div>{count}</div>;
}
