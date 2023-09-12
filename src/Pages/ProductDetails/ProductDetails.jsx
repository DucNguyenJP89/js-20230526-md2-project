import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "../../redux/actions/productsActions";
import { addToCart, editItemQuantity } from "../../redux/actions/cartActions";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let product = useSelector((state) => state.product);
  let cart = useSelector((state) => state.cart.carts);
  const [isLoading, setLoading] = useState(true);
  const fetchProductDetails = async (id) => {
    const response = await axios.get(`http://localhost:8080/products/${id}`).catch((e) => console.log(e));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProductDetails(id);
    setLoading(false);
  }, [id]);
  const calShippingDate = () => {
    let shippingDate = new Date();
    shippingDate.setDate(shippingDate.getDate()+3);
    return shippingDate.toDateString();
  }
  const handleCart = () => {
    const item = cart.find((item) => item.product_id === product.id);
    if (item) {
      console.log("Item found");
      const newItem = {
        ...item,
        quantity: item.quantity+1
      };
      console.log(newItem);
      dispatch(editItemQuantity(newItem));
    } else {
      console.log("No item found");
      const newItem = {
        product_id: product.id,
        product_name: product.productName,
        product_img: product.imgPath[0],
        product_price: product.price,
        quantity: 1
      };
      dispatch(addToCart(newItem));
    }
  }
  return !isLoading && product ? (
    <div className="product-details-container">
      <div className="image-list">
        {product?.imgPath?.map((image, i) => (
          <img key={i} src={image} alt={product.productName}/>
        ))}
      </div>
      <div className="product-info">
        <div className="badge-new"></div>
        <div className="product-title">
          <h2>{product.productName} - {product?.colour?.toUpperCase()}</h2>
          <p>Item No.{product.id}</p>
          <p className="product-price">S${product?.price?.toLocaleString()}</p>
        </div>
        <div className="product-variant">
          <div className="current-color">
            Color: <span>{product?.colour?.toUpperCase()}</span>
          </div>
          <div className="product-nav">
            TO DO
          </div>
        </div>
        <div className="add-button">
          <button onClick={handleCart}>Add to Bag</button>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="break-line"></div>
        <div className="shipping-info">
          <h3>Shipping & Returns</h3>
          <p>Earliest Delivery Date: <span>{calShippingDate()}</span></p>
          <div className="shipping-note">
            <p><span>Free Standard Delivery</span> on all orders</p>
            <p>Find out more about our <span>Returns & Refunds</span></p>
          </div>
        </div>
      </div>
    </div>
  ) : (<div className="loading-screen">
    <div className="lds-dual-ring"></div>
  </div>)
}

export default ProductDetails;
