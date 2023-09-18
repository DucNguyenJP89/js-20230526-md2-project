import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './UserOrders.scss'


function UserOrders() {
  const initOrders = useSelector((state) => state.orders.orders);
  const loginUser = JSON.parse(localStorage.getItem('loginUser'));
  const userOrders = initOrders.filter((order) => order.order_user === loginUser.id);
  return (
    <div className="user-orders-history">
      { userOrders.length > 0 ? 
        (
          <div className='orders-container'>
            <h2>Orders History</h2>
            <div className="orders-list">
              {userOrders.map((order) =>(
                <div className='order-item' key={order.id}>
                  <div className="order-header">
                    <div className="order-info">
                      <div className='o-id'>Order No.{order.order_id}</div>
                      <div className='o-date'>Date: {order.order_date}</div>
                    </div>
                    <div className="order-customer">
                      <h3>Delivery Info:</h3>
                      <div>Customer: {order.order_customer.first} {order.order_customer.last}</div>
                      <div>Address: {order.order_customer.address}</div>
                      <div>Contact: {order.order_customer.contact}</div>
                    </div>
                  </div>
                  <div className="order-list-item">
                    <h3>Items List</h3>
                    {order.order_items.map((item) => (
                      <div className='item-details' key={item.product_id}>
                        <div className="item-img">
                          <img src={item.product_img} alt={item.product_name} />
                        </div>
                        <div className="item-basic-info">
                          <div className="i-name">{item.product_name}</div>
                          <div className="i-id">Item no.{item.product_id}</div>
                          <div className="i-colour">Colour: {item.product_colour}</div>
                        </div>
                        <div className="item-qty">Qty: {item.quantity}</div>
                        <div className="item-price">Price: S${item.product_price}</div>
                      </div>
                    ))}
                  </div>
                  <div className="order-total">Total: S${order.order_total}</div>
                </div>
              ))}
            </div>
          </div>
        ) 
        : 
        (
          <div className='orders-container'>
            <h3>You have no order yet</h3>
            <NavLink to={'/'}>Start browsing now</NavLink>
          </div>
        )
      }
    </div>
  )
}

export default UserOrders