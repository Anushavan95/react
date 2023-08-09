import React, { useEffect, useRef, createElement  } from "react";
import "./App.scss";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
// let count = 0;
export default function App() {
  const [value, setvalue] = useState('')
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const ref = useRef(0)
  const myref = useRef(null)


  useEffect((() => {
    let element = document.querySelector('.MuiButton-contained')
    console.log(element)
    ref.current++
  //  console.log(ref.current, "ref current")
  // console.log("jdsdjhsjdhj")
  // setvalue("my value")
  }), [ref.current])


// console.log(elementRef.current)
// console.log(myref.current)
// useEffect(() => {
//  


  
// }, [])
// const element = createElement("h2", null,   <Typography>ref {""}{ref.current}</Typography> )
// console.log(element)
return (
    <div className="layout">
   <Typography>ref {""}{ref.current}</Typography> 
   <Typography>state {""}{count}</Typography> 

      <Button variant="contained" onClick={() => setCount(count+1)} ref={myref}>add count</Button>
      <input value={value} onChange={(e) => setvalue(e.target.value)} ref={elementRef} />
    Hook
    </div>
  );
}
