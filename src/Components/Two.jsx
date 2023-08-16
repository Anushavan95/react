import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { ProductConext } from '../context/productContext'

export default function Two({addProduct}) {

  return (
    <Button variant="contained" onClick={addProduct}>
        add this product
      
    </Button>
  )
}
