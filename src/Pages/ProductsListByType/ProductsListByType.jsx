import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ItemCard from '../../Components/ItemCard/ItemCard';

function ProductsListByType() {
  const { type } = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const productsByType = type === 'new' ? products : products.filter((product) => product.type === type);
  return (
    <div className="products-list">
      {productsByType && productsByType.map((product) => (
        <ItemCard item={product} key={product.id}/>
      ))}
    </div>
  )
}

export default ProductsListByType