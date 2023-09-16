import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Space, Table, FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function AdminProductList() {
  const initProducts = useSelector((state) => state.allProducts.products);
  const [ products, setProducts ] = useState(initProducts);
  const navigate = useNavigate();
  useEffect(() => {
    setProducts(initProducts);
  }, [initProducts])
  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'id',
      key: 'id',
      width: '8%'
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <Space size="middle">
          <NavLink to={`${id}`}>Edit</NavLink>
          <NavLink>Delete</NavLink>
        </Space>
      )
    }
  ];
  let data = products;
  return (
    <div className='admin-products-list'>
      <h2>Products List</h2>
      <Table className='list-table' columns={columns} dataSource={data} rowKey={data => data.id}/>
      <FloatButton icon={<PlusOutlined />} tooltip={<div>Click to create new product</div>} onClick={() => navigate('/admin/products/new')}/>
    </div>
  )
}

export default AdminProductList