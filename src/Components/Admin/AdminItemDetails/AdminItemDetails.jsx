import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from '../../../redux/actions/productsActions';
import ProductForm from '../ProductForm/ProductForm';

function AdminItemDetails() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  console.log(product);
  const fetchProductDetails = async (id) => {
    const response = await axios.get(`http://localhost:8080/products/${id}`).catch((e) => console.log(e));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (id !== 'new') {
      fetchProductDetails(id);
    }
  }, [id]);
  return (
    <div className='admin-item-details'>
      <h2>{id !== 'new' ? 'Edit Product' : 'Register new product'}</h2>
      {id !== 'new' ? (product && <ProductForm product={product} mode='edit' />) : (<ProductForm mode='new' />)}
    </div>
  )
}

export default AdminItemDetails