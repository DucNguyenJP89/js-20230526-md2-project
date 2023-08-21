import React from 'react'
import { useParams } from 'react-router-dom'

function ProductsListByType() {
  const param = useParams();
  return (
    <div>
      <h3>Products List by Type</h3>
      <p>Type: {param.type}</p>
    </div>
  )
}

export default ProductsListByType