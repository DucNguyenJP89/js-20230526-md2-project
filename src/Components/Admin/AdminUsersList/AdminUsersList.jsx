import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom';

function AdminUsersList() {
  const initUsers = useSelector((state) => state.users.users);
  const [ users, setUsers ] = useState(initUsers);
  let data = users;
  const { Column } = Table;
  const navigate = useNavigate();
  useEffect(() => {
    setUsers(initUsers);
  }, [initUsers])
  return (
    <div className="admin-users-list">
      <h2>Users List</h2>
      <Table className="list-table" dataSource={data} rowKey={data => data.id} onRow={(rowKey) => {
        return {
          onClick: () => navigate('/admin/users/' + rowKey.id) 
        }
      }}>
        <Column title="User ID" dataIndex="id" key="id" />
        <Column title="First" dataIndex="first" key="first" />
        <Column title="Last" dataIndex="last" key="last" />
        <Column title="Member since" dataIndex="joined_at" key="joined_at" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Password" dataIndex="password" key="password" />
        <Column title="Newsletter?" width='5%' dataIndex="newsletter" key="newsletter" render={(newsletter) => (<div>{newsletter === true ? 'true' : 'false'}</div>)}/>
      </Table>
    </div>
  )
}

export default AdminUsersList