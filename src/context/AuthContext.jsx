import React, { createContext, useContext, useState } from 'react'
import { FetchContext } from './FetchContext'

export const Auth = createContext()
export default function AuthContext({children}) {
 const cont =    useContext(FetchContext)
 console.log(cont)
    const [name, setname] = useState('')
const handleName = (e) => {
setname(e.target.value)
}
let credentials  ={
    name, 
    handleName
}
  return (
    <Auth.Provider value={credentials}>
      {children}
    </Auth.Provider>
  )
}
