import React, { useContext } from 'react'
import Product from './Product'
import { ProductConext } from '../context/productContext'

export default function Layout() {
 const myName =    useContext(ProductConext)

  return (
    <div>
        <Product  />
    </div>
  )
}
