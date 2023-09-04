import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ProductsListNav from '../../Components/ProductsListNav/ProductsListNav'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { setProducts } from '../../redux/actions/productsActions'
import "./ProductsList.scss"

function ProductsList() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8080/products").catch((e) => console.log(e));
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <ProductsListNav />
      <Outlet />
    </div>
  )
}

export default ProductsList