import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./CartDetails.scss";

function CartDetails() {
  const initCart = useSelector((state) => state.cart.carts);
  const [currentCart, setCurrentCart] = useState(initCart);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    setCurrentCart(initCart);
    const cartTotal = initCart.reduce((total, item) => {
      return total + item.product_price * item.quantity;
    }, 0);
    setCartTotal(cartTotal.toLocaleString());
  }, [initCart]);
  return (
    <div className="cart-details-container">
      <div className="shopping-cart-list">
        <h2>SHOPPING CART</h2>
        <div className="cart-table">
          <div className="table-title">
            <div className="items-cnt">{currentCart.length} Item(s)</div>
            <div className="c-product">Product</div>
            <div>Price</div>
            <div>Qty</div>
            <div>Subtotal</div>
            <div className="action"></div>
          </div>
          <div className="cart-details">
            <div className="details-title">AVAILABLE NOW</div>
            <div className="details-list">
              {currentCart.map((item) => (
                <div className="item-info" key={item.product_id}>
                  <img src={item.product_img} alt={item.product_name} />
                  <div className="item-specs">
                    <div className="item-badge"></div>
                    <div className="item-name">{item.product_name}</div>
                    <div className="item-id">Item no.{item.product_id}</div>
                    <div className="item-text">
                      Colour: {item.product_colour}
                    </div>
                  </div>
                  <div className="item-price">S${item.product_price}</div>
                  <div className="item-qty">
                    <form>
                      <select
                        name="editQuantity"
                        id="editQuantity"
                        value={item.quantity}
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
                      icon={icon({ name: "trash-can", style: "regular" })}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cart-summary-container">
        <div className="summary-details">
          <div className="title">ORDER SUMMARY</div>
          <div className="subtitle-text">
            <div>Subtotal:</div>
            <div>S${cartTotal}</div>
          </div>
          <div className="total-text">
            <div>Estimated Total:</div>
            <div>S${cartTotal}</div>
          </div>
          <div className="check-out-btn">
            <button>CHECKOUT</button>
          </div>
          <div className="payment-method-cards">
            <p>Accepted Payment Methods</p>
            <div className="cards-list">
              <div className="card-item">
                <img
                  src="https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwebf2eb96/images/payment-icons/master-card.svg"
                  alt="master"
                />
              </div>
              <div className="card-item">
                <img
                  src="https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw0a539928/images/payment-icons/visa.svg"
                  alt="visa"
                />
              </div>
              <div className="card-item">
                <img
                  src="https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwa5719325/images/payment-icons/american-express.svg"
                  alt="amex"
                />
              </div>
              <div className="card-item">
                <img
                  src="https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwb6bd02b7/images/payment-icons/paypal.svg"
                  alt="paypal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
