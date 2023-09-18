import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Space, Table, FloatButton } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/actions/productsActions';
import Swal from 'sweetalert2';
import axios from 'axios';

function AdminProductList() {
  const initProducts = useSelector((state) => state.allProducts.products);
  const [ products, setProducts ] = useState(initProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: 'Delete product',
      text: `Are you sure you want to delete product no. ${id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Delete product',
      cancelButtonColor: '#999',
    }).then((res) => {
      if (res.isConfirmed) {
        axios.delete(`http://localhost:8080/products/${id}`).then((res) => {
          dispatch(deleteProduct(id));
          navigate('/admin/products');
        }).catch(e => console.log(e))
      }
    })
  }
  useEffect(() => {
    setProducts(initProducts);
  }, [initProducts])
  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'id',
      key: 'id',
      width: '5%',
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
      filterMultiple: true,
      filters: [
        {
          text: 'men',
          value: 'men',
        },
        {
          text: 'women',
          value: 'women',
        }
      ],
      onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filterMultiple: true,
      filters: [
        {
          text: 'shoes',
          value: 'shoes',
        },
        {
          text: 'bags',
          value: 'bags',
        },
        {
          text: 'accessories',
          value: 'accessories'
        }
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a,b) => a.price - b.price,
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <Space size="middle">
          <NavLink to={`${id}`}>Edit</NavLink>
          <button className="delete-btn" onClick={() => handleDeleteProduct(id)}><DeleteOutlined style={{color: 'red', fontSize: '18px'}} /></button>
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