import React from 'react';
import "./Header.scss";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img src="https://www.pedroshoes.com/on/demandware.static/Sites-pd-international-Site/-/default/dwcec278f2/images/logo.svg" alt="pedro-logo" />
        <ul className="links">
          <li><NavLink>NEW</NavLink></li>  
          <li><NavLink>WOMEN</NavLink></li>  
          <li><NavLink>MEN</NavLink></li>  
        </ul>
      </div>
      <div className="nav">
        <FontAwesomeIcon icon={icon({name: 'magnifying-glass'})} className="nav-icon" size="lg"/>
        <div className="divider"></div>
        <FontAwesomeIcon icon={icon({name: 'user', style: 'regular'})} className="nav-icon" size="lg"/>
        <div className="divider"></div>
        <FontAwesomeIcon icon={icon({name: 'star', style: 'regular'})} className="nav-icon" size="lg"/>
      </div>
    </div>
  )
}

export default Header