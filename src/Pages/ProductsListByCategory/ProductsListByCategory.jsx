import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ItemCard from '../../Components/ItemCard/ItemCard';

function ProductsListByCategory() {
  const { type, category } = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const productsByCategory = products.filter((product) => {
    return product.type === type && product.category === category;
  });
  return (
    <div className="products-list">
      {productsByCategory && productsByCategory.map((product) => (
        <ItemCard item={product} />
      ))}
    </div>
  )
}

export default ProductsListByCategory