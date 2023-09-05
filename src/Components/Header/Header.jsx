import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShoppingOutlined } from '@ant-design/icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {
  // Check if exists loginUser in localStorage and display in Header
  const user = localStorage.getItem('loginUser');
  const [ loginUser, setLoginUser ] = useState({});
  const [ openMenu, setOpenMenu ] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      console.log('User exists');
      setLoginUser(JSON.parse(user));
    } else {
      setLoginUser({});
      console.log('No user logged in');
    }
  }, [user]);
  const handleLogout = () => {
    setLoginUser({});
    setOpenMenu(false);
    localStorage.removeItem('loginUser');
    navigate('./login');
  }
  return (
    <div>
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
          <FontAwesomeIcon icon={icon({name: 'user', style: 'regular'})} className="nav-icon" size="lg" onClick={() => setOpenMenu(!openMenu)}/>
          <div className="divider"></div>
          <div className="shopping-cart">
            <ShoppingOutlined className="nav-icon"/>
            <span className="cart-number"></span>
          </div>
        </div>
      </div>
      { openMenu && 
        <div className="user-menu">
          { Object.keys(loginUser).length > 0 ? 
          <div>
            <div>Welcome back, {loginUser.first} {loginUser.last}</div>
            <button className="button-logout" onClick={handleLogout}>Logout</button>
          </div> 
          : 
          <div>
            <button className="button-login" onClick={() => {
              setOpenMenu(false);
              navigate('./login');
              }}>Sign In</button>
            <button className="button-register" onClick={() => {
              setOpenMenu(false);
              navigate('./register');
              }}>Create An Account</button>
          </div>}
        </div>
      }
    </div>
  )
}

export default Header