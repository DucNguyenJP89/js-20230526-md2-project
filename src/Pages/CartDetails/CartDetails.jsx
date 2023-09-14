import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CartDetails.scss";
import DetailItem from "../../Components/DetailItem/DetailItem";

function CartDetails() {
  const initCart = useSelector((state) => state.cart.carts);
  const [currentCart, setCurrentCart] = useState(initCart);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (initCart.length > 0) {
      setCurrentCart(initCart);
      const cartTotal = initCart.reduce((total, item) => {
        return total + item.product_price * item.quantity;
      }, 0);
      setCartTotal(cartTotal.toLocaleString());
    } else {
      navigate("/catalog/new");
    }
  }, [initCart]);
  return (
    <div>
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
                {currentCart.map((item, i) => (
                  <DetailItem item={item} key={i} />
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
              <button onClick={() => navigate('/check-out')}>CHECKOUT</button>
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
      <div className="cart-delete-popup">
        <div className="popup-container">

        </div>
      </div>
    </div>
  );
}

export default CartDetails;
