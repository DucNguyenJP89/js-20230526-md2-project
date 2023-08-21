import React from 'react'
import { useParams } from 'react-router-dom'

function ProductsListByCategory() {
  const param = useParams();
  return (
    <div>
      <h2>ProductsListByCategory</h2>
      <p>Type: {param.type}</p>
      <p>Category: {param.category}</p>
    </div>
  )
}

export default ProductsListByCategory