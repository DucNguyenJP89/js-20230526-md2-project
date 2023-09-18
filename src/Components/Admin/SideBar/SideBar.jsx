import React from 'react'
import { NavLink } from 'react-router-dom'
import "./SideBar.scss"

function SideBar() {
  return (
    <div className="admin-sidebar">
      <div className="admin-heading">
        <h2>ADMIN</h2>
      </div>
      <div className="admin-links">
        <NavLink to={'/admin/products'}>Products</NavLink>
        <NavLink to={'/admin/orders'}>Orders</NavLink>
        <NavLink to={'/admin/users'}>Users</NavLink>
      </div>
    </div>
  )
}

export default SideBar