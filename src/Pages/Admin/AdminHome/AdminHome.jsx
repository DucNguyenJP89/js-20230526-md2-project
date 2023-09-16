import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/actions/productsActions";
import "./AdminHome.scss";

function AdminHome() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:8080/products")
      .catch((e) => console.log(e));
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="admin-home">
      <Outlet />
    </div>
  );
}

export default AdminHome;