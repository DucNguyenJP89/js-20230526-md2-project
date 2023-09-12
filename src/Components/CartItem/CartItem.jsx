import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./CartItem.scss";
import {
  editItemQuantity,
  removeCartItem,
} from "../../redux/actions/cartActions";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const handleChange = (e) => {
    const updatedQty = Number(e.target.value);
    const updatedItem = {
      ...item,
      quantity: updatedQty,
    };
    dispatch(editItemQuantity(updatedItem));
  };
  const handleDelete = () => {
    const itemId = Number(item.product_id);
    dispatch(removeCartItem(itemId));
  };
  return (
    <div className="cart-item-wrap">
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
              <select
                name="editQuantity"
                id="editQuantity"
                value={item.quantity}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
            <FontAwesomeIcon
              onClick={() => setConfirmDelete(true)}
              icon={icon({ name: "trash-can", style: "regular" })}
            />
          </div>
        </div>
      </div>
      {confirmDelete && (
        <div className="delete-popup">
          <p>Are you sure you want to remove this item?</p>
          <div className="popup-buttons">
            <button onClick={() => setConfirmDelete(false)}>Cancel</button>
            <button onClick={handleDelete}>Remove</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
