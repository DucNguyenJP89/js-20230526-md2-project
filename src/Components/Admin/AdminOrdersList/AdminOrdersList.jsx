import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Space, Table} from 'antd';

function AdminOrdersList() {
  const initOrders = useSelector((state) => state.orders.orders);
  const [ orders, setOrders ] = useState(initOrders);
  const { Column, ColumnGroup } = Table;
  let data = orders;
  const navigate = useNavigate();
  useEffect(() => {
    setOrders(initOrders);
  }, [initOrders])
  return (
    <div>
      <h2>Orders List</h2>
      <Table dataSource={data}>
        <Column title="Order ID" dataIndex="order_id" key="order_id" />
        <Column title="User ID" dataIndex="order_user" key="order_user" />
        <Column title="Order Date" dataIndex="order_date" key="order_date" render={(order_date) => {
          const date = new Date(order_date);
          return date.toLocaleString();
        }} />
        <Column title="Status" dataIndex="order_status" key="order_status" />
        <Column title="Total Amount" dataIndex="order_total" key="order_total" render={(order_total) => `S$${order_total}`} />
        <ColumnGroup title="Delivery Information">
            <Column title="Customer name" dataIndex="order_customer" key="order_customer" render={(order_customer) => `${order_customer.first} ${order_customer.last}`} />
            <Column title="Address" dataIndex="order_customer" key="order_customer" render={(order_customer) => order_customer.address} width='15%'/>
            <Column title="Contact" dataIndex="order_customer" key="order_customer" render={(order_customer) => order_customer.contact} />
        </ColumnGroup>
        <Column title="Numbers of items" dataIndex="order_items" key="order_items" render={(order_items) => order_items.length} />
      </Table>
    </div>
  )
}

export default AdminOrdersList