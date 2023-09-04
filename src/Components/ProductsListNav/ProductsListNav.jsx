import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductsListNav.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from "../../redux/actions/productsActions";
import axios from "axios";

function ProductsListNav() {
  const { type } = useParams();
  const dispatch = useDispatch();
  let category = useSelector((state) => state.category);
  const fetchCategoryInfo = async (type) => {
    const response = await axios.get(`http://localhost:8080/categories/${type}`).catch((e) => console.log(e));
    dispatch(setCategory(response.data));
  };
  useEffect(() => {
    fetchCategoryInfo(type);
  }, [type]);
  const newContainer = (
    <div className="products-list-nav">
      <div className="new-container">
        <img
          src={category?.newImg}
          alt="new products banner"
        />
        <div className="new-text">
          <h2>{category?.description?.toUpperCase()}</h2>
        </div>
      </div>
    </div>
  );
  const typeContainer = (
    <div className="products-list-nav">
      <div className="type-container">
        <h2>{type.toUpperCase()}'S VIEW ALL</h2>
        <p>{category?.description}</p>
      </div>
      <div className="menu-links">
        <Link to={`/catalog/${type}/shoes`}>
          <img src={category.shoesImg} alt="shoes category" />
          <div className="category-title">Shoes</div>
        </Link>
        <Link to={`/catalog/${type}/bags`}>
          <img src={category.bagsImg} alt="bags category" />
          <div className="category-title">Bags</div>
        </Link>
        <Link to={`/catalog/${type}/accessories`}>
          <img src={category.accessoriesImg} alt="accessories category" />
          <div className="category-title">Accessories</div>
        </Link>
      </div>
    </div>
  );
  return type === 'new' ? newContainer : typeContainer;
}
export default ProductsListNav;
