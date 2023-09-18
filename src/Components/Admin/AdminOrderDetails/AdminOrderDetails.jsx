import React, { useState,useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { selectedOrder, editOrder } from '../../../redux/actions/ordersActions'
import { Table, Breadcrumb } from 'antd';

function AdminOrderDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let orderDetails = useSelector((state) => state.orders.selectedOrder);
  const users = useSelector(state => state.users.users);
  const orderUser = users.find(user => user.id === Number(id));
  const { Column } = Table;
  const fetchOrderDetails = async (id) => {
    const response = await axios.get(`http://localhost:8080/orders/${id}`).catch(e => console.error(e));
    dispatch(selectedOrder(response.data));
  };
  useEffect(() => {
    fetchOrderDetails(id);
  }, [id])
  return orderDetails && (
    <div className='admin-order-details-container'>
      <Breadcrumb items={
        [
          {
            title: 'Home',
          },
          {
            title: <NavLink to={'/admin/orders'}>Orders</NavLink>,
          },
          {
            title: 'Order Details',
          }
        ]
      }/>
      <h2>Order details</h2>
      <div className="order-info">
        <div className="info-group">
          <div className="title">Order ID</div>
          <div className="text">{orderDetails.order_id}</div>
        </div>
        <div className="info-group">
          <div className="title">Order Date</div>
          <div className="text">{orderDetails.order_date}</div>
        </div>
        <div className="info-group">
          <div className="title">Order User</div>
          <div className="text">{orderUser?.first} {orderUser?.last} (User ID: {orderDetails.order_user})</div>
        </div>
        <div className="info-group">
          <div className="title">Order Status</div>
          <div className="text">{orderDetails.order_status}</div>
        </div>
      </div>
      <div className="order-customer-info">
        <div className="info-group">
          <div className="title">Customer name</div>
          <div className="text">{orderDetails.order_customer.first} {orderDetails.order_customer.last}</div>
        </div>
        <div className="info-group">
          <div className="title">Address</div>
          <div className="text">{orderDetails.order_customer.address}</div>
        </div>
        <div className="info-group">
          <div className="title">Contact</div>
          <div className="text">{orderDetails.order_customer.contact}</div>
        </div>
      </div>
      <div className="order-items-details">
        <Table dataSource={orderDetails.order_items} rowKey={data => data.product_id} >
          <Column title="Product ID" dataIndex="product_id" key="product_id" />
          <Column title="Product Name" dataIndex="product_name" key="product_name" />
          <Column title="Product Image" dataIndex="product_img" key="product_img" width='15%' render={(product_img) => (
            <img className='product-img' src={product_img} alt='product thumbnail' />
          )} />
          <Column title="Colour" dataIndex="product_colour" key="product_colour" />
          <Column title="Price" dataIndex="product_price" key="product_price" />
          <Column title="Qty" dataIndex="quantity" key="quantity" />
        </Table>
      </div>
    </div>
  )
}

export default AdminOrderDetails