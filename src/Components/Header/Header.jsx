import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShoppingOutlined } from '@ant-design/icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {
  // Check if exists loginUser in localStorage and display in Header
  const [ loginUser, setLoginUser ] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    if (user) {
      console.log('User exists');
      setLoginUser(user);
    } else {
      console.log('No user logged in');
    }
  }, []);
  return (
    <div className="p-header">
      <div className="nav">
        <NavLink to={'./'}><img src="https://www.pedroshoes.com/on/demandware.static/Sites-pd-international-Site/-/default/dwcec278f2/images/logo.svg" alt="pedro-logo" /></NavLink>
        <ul className="links">
          <li><NavLink to={'./catalog/new'}>NEW</NavLink></li>  
          <li><NavLink to={'./catalog/women'}>WOMEN</NavLink></li>  
          <li><NavLink to={'./catalog/men'}>MEN</NavLink></li>  
        </ul>
      </div>
      <div className="nav">
        <FontAwesomeIcon icon={icon({name: 'magnifying-glass'})} className="nav-icon" size="lg"/>
        <div className="divider"></div>
        <FontAwesomeIcon icon={icon({name: 'user', style: 'regular'})} className="nav-icon" size="lg"/>
        {/* Example: display loginUser email here if exist */}
        {loginUser && <div>{loginUser.email}</div>}
        <div className="divider"></div>
        <div className="shopping-cart">
          <ShoppingOutlined className="nav-icon"/>
          <span className="cart-number"></span>
        </div>
      </div>
    </div>
  )
}

export default Header