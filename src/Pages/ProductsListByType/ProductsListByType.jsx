import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function ProductsListByType() {
  const params = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const productsByType = products.filter((product) => product.type === params.type);
  return (
    <div>
      <h3>Products List by Type</h3>
      <p>Type: {params.type}</p>
      {productsByType && productsByType.map((product) => (
        <div>
          <p>{product.id}</p>
          <p>{product.productName}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsListByType