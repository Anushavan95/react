import React, { useContext } from 'react'
import Two from './Two'
import One from './One'
import { ProductConext } from '../context/productContext'

export default function Product() {
   const productsValue =  useContext(ProductConext)

  return (
    <div>
      {productsValue.products.map(item => {
        return <li key={item.id}>{item.title} {item.price} <Two addProduct={() =>productsValue.addProduct(item)} /> </li>
      })}
      <One  />
    </div>
  )
}
