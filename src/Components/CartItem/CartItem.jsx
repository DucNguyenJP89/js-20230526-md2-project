import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./CartItem.scss"

function CartItem({item}) {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.product_img} alt={item.product_name} />
      </div>
      <div className="item-info-action">
        <div className="info">
          <div className="title">{item.product_name}</div>
          <div className="price">S${item.product_price}</div>
        </div>
        <div className="action">
          <form>
            <label htmlFor="editQuantity">Qty:</label>
            <select name="editQuantity" id="editQuantity" value={item.quantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
          <FontAwesomeIcon icon={icon({name: 'trash-can', style: 'regular'})} />
        </div>
      </div>
    </div>
  )
}

export default CartItem