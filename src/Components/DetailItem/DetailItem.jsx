import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  editItemQuantity,
  removeCartItem,
} from "../../redux/actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./DetailItem.scss";

function DetailItem({ item }) {
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const [hideScroll, setHideScroll] = useState(false);
  const handleQtyChange = (e) => {
    const updatedQty = Number(e.target.value);
    const newItem = {
      ...item,
      quantity: updatedQty,
    };
    dispatch(editItemQuantity(newItem));
  };
  const handleDelete = () => {
    const itemId = Number(item.product_id);
    dispatch(removeCartItem(itemId));
    setOpenDelete(false);
    setHideScroll(false);
  };
  useEffect(() => {
    if (hideScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [hideScroll]);
  return (
    <div>
      <div className="item-info">
        <img src={item.product_img} alt={item.product_name} />
        <div className="item-specs">
          <div className="item-badge"></div>
          <div className="item-name">{item.product_name}</div>
          <div className="item-id">Item no.{item.product_id}</div>
          <div className="item-text">Colour: {item.product_colour}</div>
        </div>
        <div className="item-price">S${item.product_price}</div>
        <div className="item-qty">
          <form>
            <select
              name="editQuantity"
              defaultValue={item.quantity}
              onChange={handleQtyChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
        </div>
        <div className="item-subtotal">
          S${(item.product_price * item.quantity).toLocaleString()}
        </div>
        <div className="item-action">
          <FontAwesomeIcon
            onClick={() => {
              setHideScroll(true);
              setOpenDelete(true);
            }}
            icon={icon({ name: "trash-can", style: "regular" })}
          />
        </div>
      </div>
      {openDelete && (
        <div className="delete-popup-wrap">
          <div className="delete-modal">
            <div className="warning-text">
              Are you sure you want to remove this item?
            </div>
            <div className="delete-buttons">
              <button
                onClick={() => {
                  setHideScroll(false);
                  setOpenDelete(false);
                }}
                className="cancel-action"
              >
                Cancel
              </button>
              <button onClick={handleDelete} className="delete-confirm">
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailItem;
