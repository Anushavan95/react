
import React, { useContext } from 'react'
import { ProductConext } from '../context/productContext'

export default function One({cart}) {
  const product  =  useContext(ProductConext)
  console.log(product)
  return (
    <div>
     counter product
     {product.cart.length}
    </div>
  )
}
