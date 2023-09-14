import React, { useState, useEffect } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingOutlined, ShoppingFilled } from "@ant-design/icons";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

function Header() {
  // Check if exists loginUser in localStorage and display in Header
  let initCart = useSelector((state) => state.cart.carts);
  console.log(initCart);
  const [cart, setCart] = useState(initCart);
  const user = localStorage.getItem("loginUser");
  const [loginUser, setLoginUser] = useState({});
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemNumber, setCartItemNumber] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      console.log("User exists");
      setLoginUser(JSON.parse(user));
    } else {
      setLoginUser({});
      console.log("No user logged in");
    }
  }, [user]);
  useEffect(() => {
    setCart(initCart);
    const cartTotal = initCart.reduce((total, item) => {
      return total + item.product_price * item.quantity;
    }, 0);
    setCartTotal(cartTotal.toLocaleString());
    if (initCart.length > 0) {
      setCartItemNumber(initCart.length);
    }
  }, [initCart]);
  const handleLogout = () => {
    setLoginUser({});
    setOpenMenu(false);
    localStorage.removeItem("loginUser");
    navigate("./login");
  };
  return (
    <div>
      <div className="p-header">
        <div className="nav">
          <NavLink to={"./"}>
            <img
              src="https://www.pedroshoes.com/on/demandware.static/Sites-pd-international-Site/-/default/dwcec278f2/images/logo.svg"
              alt="pedro-logo"
            />
          </NavLink>
          <ul className="links">
            <li>
              <NavLink to={"./catalog/new"}>NEW</NavLink>
            </li>
            <li>
              <NavLink to={"./catalog/women"}>WOMEN</NavLink>
            </li>
            <li>
              <NavLink to={"./catalog/men"}>MEN</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav">
          <FontAwesomeIcon
            icon={icon({ name: "magnifying-glass" })}
            className="nav-icon"
            size="lg"
          />
          <div className="divider"></div>
          <FontAwesomeIcon
            icon={icon({ name: "user", style: "regular" })}
            className="nav-icon"
            size="lg"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <div className="divider"></div>
          <div className="shopping-cart" onClick={() => setOpenCart(!openCart)}>
            {cart.length > 0 ? (
              <div>
                <ShoppingFilled className="nav-icon" />
                <span className="cart-number">{cartItemNumber}</span>
              </div>
            ) : (
              <ShoppingOutlined className="nav-icon" />
            )}
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="user-menu">
          {Object.keys(loginUser).length > 0 ? (
            <div>
              <div>
                Welcome back, {loginUser.first} {loginUser.last}
              </div>
              <button className="button-logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className="button-login"
                onClick={() => {
                  setOpenMenu(false);
                  navigate("./login");
                }}
              >
                Sign In
              </button>
              <button
                className="button-register"
                onClick={() => {
                  setOpenMenu(false);
                  navigate("./register");
                }}
              >
                Create An Account
              </button>
            </div>
          )}
        </div>
      )}
      {openCart && (
        <div className="cart-container">
          {cart.length > 0 ? (
            <div className="user-cart">
              <div className="cart-title">MY SHOPPING BAG</div>
              <div className="cart-list">
                {cart.map((item, i) => (
                  <div key={i}>
                    <CartItem item={item} key={item.product_id} />
                    <div className="item-divider"></div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <div className="total-text">Subtotal:</div>
                <div className="total-number">S${cartTotal}</div>
              </div>
              <button
                className="checkout-btn"
                onClick={() => {
                  setOpenCart(false);
                  navigate("./check-out");
                }}
              >
                CHECKOUT
              </button>
              <button
                className="viewbag-btn"
                onClick={() => {
                  setOpenCart(false);
                  navigate("./cart");
                }}
              >
                VIEW BAG DETAILS
              </button>
            </div>
          ) : (
            <div className="empty-cart">You have <b>0</b> item(s) in your bag</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
