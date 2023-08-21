import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductsListNav from '../../Components/ProductsListNav/ProductsListNav'

function ProductsList() {
  return (
    <div>
      <ProductsListNav />
      <Outlet />
    </div>
  )
}

export default ProductsList