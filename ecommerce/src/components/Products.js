import React from 'react'
import { ApiTopProducts } from '../api/TopProductsApi'
import Product from './Product'

const Products = () => {
  return (
    <div>
      {
     ApiTopProducts.map((product, index) => (
        <Product item={product} key={index} />
     ))
      }
    </div>
  )
}

export default Products
