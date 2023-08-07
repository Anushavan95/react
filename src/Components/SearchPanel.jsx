import React, { useEffect, useState } from 'react'
import TextField from './dynamic/TextField'

export default function SearchPanel() {
const [serachValue, setSearchValue] = useState('')
const [count , setCount] = useState(0)

const [obj, setObj] = useState([{name: 'text'}, {name: 'text2'}]);
const handleSearchValue = (e) => {
setSearchValue(e.target.value)
}
const addObjectHandle = () => {
    setCount(prevCount  => {
       return prevCount +1
    })
    console.log(count, "my statre")

    setCount(prevCount  => prevCount+1)
    // setCount(count+1)

    // setObj((prevState => {
    //     return [
    //         ...prevState, 
    //         {name: "text3"}
    //     ]
    // }))
}

useEffect(() => {
// console.log(count, "effect count")
}, [count])
// console.log(serachValue, 'serachValueserachValueserachValue')
  return (
    <div>
      <TextField type={"search"} placeholder={"Search"} handleSearchValue={handleSearchValue}/>
      <button onClick={addObjectHandle}>add object</button>
      {/* {JSON.stringify(obj)}
      {count} */}
    </div>
  )
}
