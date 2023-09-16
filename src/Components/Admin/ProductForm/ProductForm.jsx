import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addNewProduct, editProduct } from "../../../redux/actions/productsActions";

function ProductForm(props) {
  const mode = props.mode;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    productName: "",
    type: "",
    category: "",
    colour: "",
    colourImg: "",
    description: "",
    imgPath: [],
    price: 0,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setProduct(product => ({
      ...product,
      [name] : value
    }))
  }
  const handleImgPath = (e) => {
    const { name, value } = e.target;
    setProduct(product => ({
      ...product,
      [name] : value.split(",")
    }))
  }
  const submitNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      price: Number(product.price)
    }
    axios.post("http://localhost:8080/products", newProduct).then((res) => {
      console.log(res.data);
      dispatch(addNewProduct(res.data));
      Swal.fire({
        icon: 'success',
        title: 'Created new product successfully',
        confirmButtonText: 'Back to Products List',
        confirmButtonColor: '#000'
      }).then(() => {
        navigate('/admin/products')
      })
    }).catch(e => console.log(e));
  }
  const updateProduct = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      price: Number(product.price)
    }
    axios.patch(`http://localhost:8080/products/${product.id}`, updatedProduct).then((res) => {
      console.log(res.data);
      dispatch(editProduct(res.data))
      Swal.fire({
        icon: 'success',
        title: 'Updated successfully',
        confirmButtonText: 'Back to Products List',
        confirmButtonColor: '#000'
      }).then(() => {
        navigate('/admin/products')
      })
    }).catch(e => console.log(e))
  }
  useEffect(() => {
    if (props.product) {
      setProduct(props.product);
    }
  }, [props.product]);
  return (
    <div className="product-form">
      <form>
        <div className="product-name">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            name="productName"
            id=""
            value={product.productName || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="product-type">
          <label htmlFor="type">Type:</label>
          <select name="type" id="" value={product.type || ''} onChange={handleInputChange}>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>
        <div className="product-category">
          <label htmlFor="category">Category:</label>
          <select name="category" id="" value={product.category || ''} onChange={handleInputChange}>
            <option value="shoes">Shoes</option>
            <option value="bags">Bags</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div className="product-colour">
          <label htmlFor="colour">Colour:</label>
          <input type="text" name="colour" id="" value={product.colour || ''} onChange={handleInputChange}/>
        </div>
        <div className="product-colour-img">
          <label htmlFor="colourImg">Colour URL:</label>
          <input type="text" name="colourImg" id="" value={product.colourImg || ''} onChange={handleInputChange}/>
        </div>
        <div className="product-desc">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            value={product.description || ''}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="product-img">
          <label htmlFor="imgPath">Product Images:</label>
          <textarea
            name="imgPath"
            id=""
            cols="30"
            rows="10"
            value={product.imgPath || ''}
            onChange={handleImgPath}
          ></textarea>
        </div>
        <div className="product-price">
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="" value={product.price || ''} onChange={handleInputChange}/>
        </div>
        <div className="submit-btn">
          {mode === "edit" ? <button onClick={updateProduct}>Save</button> : <button onClick={submitNewProduct}>Create</button>}
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
