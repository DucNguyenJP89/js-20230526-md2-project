import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/actions/productsActions";
import { setOrders } from "../../../redux/actions/ordersActions";
import "./AdminHome.scss";

function AdminHome() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:8080/products")
      .catch((e) => console.log(e));
    dispatch(setProducts(response.data));
  };
  const fetchOrders = async() => {
    const response = await axios.get("http://localhost:8080/orders").catch((e) => console.log(e));
    dispatch(setOrders(response.data));
  }
  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);
  return (
    <div className="admin-home">
      <Outlet />
    </div>
  );
}

export default AdminHome;
