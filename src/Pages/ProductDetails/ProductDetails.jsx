import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
      setLoading(false);
    }).catch((err) => console.log(err));
  }, [params]);
  return !isLoading && product ? (
    <div className="product-details-container">
      <div className="image-list">
        {product.imgPath.map((image, i) => (
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
          <button>Add to Bag</button>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="break-line"></div>
        <div className="shipping-info">
          <h3>Shipping & Returns</h3>
          <p>Earliest Delivery Date: <span>02 September 2023</span></p>
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
