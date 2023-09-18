import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "antd";

function AdminOrdersList() {
  const initOrders = useSelector((state) => state.orders.orders);
  const initUsers = useSelector((state) => state.users.users);
  const [orders, setOrders] = useState(initOrders);
  const [users, setUsers] = useState(initUsers);
  const { Column, ColumnGroup } = Table;
  let data = orders;
  const navigate = useNavigate();
  useEffect(() => {
    setOrders(initOrders);
  }, [initOrders]);
  useEffect(() => {
    setUsers(initUsers);
  }, [initUsers]);
  return (
    <div className="admin-orders-list">
      <h2>Orders List</h2>
      <Table
        className="list-table"
        dataSource={data}
        rowKey={(data) => data.order_id}
      >
        <Column title="Order ID" dataIndex="order_id" key="order_id" />
        <Column
          title="Order User"
          width="8%"
          dataIndex="order_user"
          key="order_user"
          render={(order_user) => {
            const user = users.find((user) => user.id === order_user);
            return user ? (
              <div>
                <div>
                  <b>User ID: {user.id}</b>
                </div>
                <div>
                  {user.last} {user.first}
                </div>
              </div>
            ) : (
              <div>{order_user}</div>
            );
          }}
        />
        <Column
          title="Order Date"
          dataIndex="order_date"
          key="order_date"
          render={(order_date) => {
            const date = new Date(order_date);
            return date.toLocaleString();
          }}
        />
        <Column
          title="Total"
          dataIndex="order_total"
          key="order_total"
          render={(order_total) => `S$${order_total}`}
        />
        <ColumnGroup title="Delivery Information">
          <Column
            title="Customer name"
            dataIndex="order_customer"
            key="order_customer"
            render={(order_customer) =>
              `${order_customer.first} ${order_customer.last}`
            }
          />
          <Column
            title="Address"
            dataIndex="order_customer"
            key="order_customer"
            render={(order_customer) => order_customer.address}
            width="20%"
          />
          <Column
            title="Contact"
            dataIndex="order_customer"
            key="order_customer"
            render={(order_customer) => order_customer.contact}
          />
        </ColumnGroup>
        <ColumnGroup
          title="Order Details"
          dataIndex="id"
          key="id"
          render={(id) => <NavLink to={`${id}`}>Details</NavLink>}
        />
      </Table>
    </div>
  );
}

export default AdminOrdersList;
