import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./CartDetails.scss"

function CartDetails() {
  const initCart = useSelector((state) => state.cart.carts);
  const [ currentCart, setCurrentCart ] = useState(initCart);
  useEffect(() => {
    setCurrentCart(initCart);
  }, [initCart]);
  return (
    <div className="cart-details-container">
      <div className="shopping-cart-list">
        <h2>SHOPPING CART</h2>
      </div>
      <div className="shopping-cart-summary"></div>
    </div>
  )
}

export default CartDetails