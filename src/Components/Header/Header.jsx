import React from 'react';
import "./Header.scss";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {
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
        <NavLink to={'./login'}>
          <FontAwesomeIcon icon={icon({name: 'user', style: 'regular'})} className="nav-icon" size="lg"/>
        </NavLink>
        <div className="divider"></div>
        <FontAwesomeIcon icon={icon({name: 'star', style: 'regular'})} className="nav-icon" size="lg"/>
      </div>
    </div>
  )
}

export default Header