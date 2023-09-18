import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectedUser } from "../../../redux/actions/usersActions";
import { Table, Breadcrumb } from "antd";

function AdminUserDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.selectedUser);
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);
  const userOrders = orders.filter((order) => order.order_user === Number(id));
  const { Column, ColumnGroup } = Table;
  const fetchUserDetails = async (id) => {
    const response = await axios
      .get(`http://localhost:8080/users/${id}`)
      .catch((e) => console.log(e));
    dispatch(selectedUser(response.data));
  };
  useEffect(() => {
    fetchUserDetails(id);
  }, [id]);
  return (
    <div className="admin-user-details-container">
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <NavLink to={"/admin/users"}>Users</NavLink>,
          },
          {
            title: "User Details",
          },
        ]}
      />
      <h2>User Details</h2>
      { user && <div className="user-info">
        <div className="info-group">
          <div className="title">User ID</div>
          <div className="text">{user.id}</div>
        </div>
        <div className="info-group">
          <div className="title">Fullname</div>
          <div className="text">
            {user.first} {user.last}
          </div>
        </div>
        <div className="info-group">
          <div className="title">Birthday/Gender</div>
          <div className="text">
            <div>Birthday: {user.birthday}</div>
            <div>Gender: {user.gender}</div>
          </div>
        </div>
        <div className="info-group">
          <div className="title">Contact</div>
          <div className="text">{user.contact}</div>
        </div>
        <div className="info-group">
          <div className="title">Account</div>
          <div className="text">
            <div>Email: {user.email}</div>
            <div>Password: {user.password}</div>
          </div>
        </div>
      </div>}
      {userOrders.length > 0 && (
        <div className="user-orders-container">
          <h3>User's Purchase History</h3>
          <Table dataSource={userOrders} rowKey={(data) => data.id}>
            <Column title="Order ID" dataIndex="order_id" key="order_id" />
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
              title="Status"
              dataIndex="order_status"
              key="order_status"
            />
            <Column
              title="Total Amount"
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
                width="15%"
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
              render={(id) => <NavLink to={`/admin/orders/${id}`}>Details</NavLink>}
            />
          </Table>
        </div>
      )}
    </div>
  );
}

export default AdminUserDetails;
