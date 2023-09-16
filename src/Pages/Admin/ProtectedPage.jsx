import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedPage() {
  const isAdmin = localStorage.getItem('isAdmin');
  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" /> 
}

export default ProtectedPage