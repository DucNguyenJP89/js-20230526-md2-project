import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  const user = localStorage.getItem('loginUser');
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute