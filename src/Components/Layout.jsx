import React from "react";
import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NavMenu from "./NavMenu";
import SearchPanel from "./SearchPanel";
import Product from "./Product";
import Products from "./products";
import { Button } from "@mui/material";
import Card from "./Card";

let time = 0
export default function Layout() {
  const [tab, settab] = useState(1);
  const [result, setResult] = useState(null);
  const [cart, setCart] = useState([]);
  const [showalert, setShowalert] = useState(false);

  const [id, setid] = useState(1);

  const [categories, setcategories] = useState("jewelery");

  useEffect(() => {
    // setTimeout(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categories}`)
      .then((res) => {
        setResult(res.data);
      });
    // }, 2000);
  }, [categories]);
  const handleListGetItem = (id) => {
    setid(id);
  };
  const getCategoryItem = (category) => {
    setcategories(category);
  };
  useEffect(() => {
   console.log(time, "time")
  }, [time])

  const addTocart = (item) => {
    setCart((prevCart => {
      return [
        ...prevCart, item
      ]
    }))
    setShowalert(true)

  }
  useEffect(() => {
if(showalert) {
  setTimeout(() => {
    setShowalert(false)
  }, 2000);
}
  }, [showalert])
  return (
    <>
      {time}

    <div className="layout_section">
      <div>
        <Header />
        <NavMenu result={result} handleListGetItem={handleListGetItem} />
      </div>

      <div>
        <div>
          <SearchPanel />
          <Card cart={cart} />
        </div>
        <div>
          <Button variant="contained" onClick={() => settab(1)}>
            product
          </Button>
          <Button variant="contained" onClick={() => settab(2)}>
            products
          </Button>
          {tab == 1 ? (
            <Product id={id} />
          ) : (
            <Products getCategoryItem={getCategoryItem} result={result} addTocart={addTocart} showalert={showalert} />
          )}
        </div>
      </div>
    </div>
    </>
  );
}
