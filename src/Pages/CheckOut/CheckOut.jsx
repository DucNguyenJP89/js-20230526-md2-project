import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { clearCart } from "../../redux/actions/cartActions";
import "./CheckOut.scss";

function CheckOut() {
  const initCart = useSelector((state) => state.cart.carts);
  const user = localStorage.getItem("loginUser");
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  const [currentCart, setCurrentCart] = useState(initCart);
  const [cartTotal, setCartTotal] = useState(0);
  const [customer, setCustomer] = useState({
    first: "",
    last: "",
    address: "",
    contact: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const calShippingDate = () => {
    let shippingDate = new Date();
    shippingDate.setDate(shippingDate.getDate() + 3);
    return shippingDate.toDateString();
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCustomer((customer) => ({
      ...customer,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    setErrors({});
    if (customer.first === '') {
      errors.first = 'error';
      setErrors(errors => ({
        ...errors,
        first: 'This field cannot be empty',
      }))
    }
    if (customer.last === '') {
      errors.last = 'error';
      setErrors(errors => ({
        ...errors,
        last: 'This field cannot be empty',
      }))
    }
    if (customer.address === '') {
      errors.address = 'error';
      setErrors(errors => ({
        ...errors,
        address: 'This field cannot be empty',
      }))
    }
    if (customer.contact === '') {
      errors.contact = 'error';
      setErrors(errors => ({
        ...errors,
        contact: 'This field cannot be empty',
      }))
    }
    if (Object.keys(errors).length === 0) {
      const newOrder = {
        order_id: Math.round(Math.random() * 10000),
        order_date: new Date(),
        order_status: "created",
        order_user: currentUser.id,
        order_total: cartTotal,
        order_customer: {
          first: customer.first,
          last: customer.last,
          address: customer.address,
          contact: customer.contact,
        },
        order_items: [...currentCart],
      };
      axios.post("http://localhost:8080/orders", newOrder).then((res) => {
        Swal.fire({
          title: "Thank you for your purchase!",
          icon: "success",
        }).then(() => {
          dispatch(clearCart());
        });
        setCustomer({
          first: "",
          last: "",
          address: "",
          contact: "",
        }); 
      }).catch((e) => console.log(e));
    }
  };
  useEffect(() => {
    if (user) {
      setCurrentUser(JSON.parse(user));
    } else {
      navigate("/login");
    }
  }, [user]);
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
      <div className="checkout-nav">
        <NavLink to={"/"}>
          <img
            src="https://www.pedroshoes.com/on/demandware.static/Sites-pd-international-Site/-/default/dwcec278f2/images/logo.svg"
            alt="pedro-logo"
          />
        </NavLink>
      </div>
      <div className="checkout-page">
        <h2>CHECKOUT</h2>
        <div className="checkout-container">
          <div className="delivery-info">
            <div className="delivery-title">Delivery</div>
            <div className="delivery-method">
              <div className="title">Delivery Method</div>
              <div className="delivery-method-box">
                <div className="delivery-checkbox">
                  <input
                    type="checkbox"
                    name="delivery"
                    id="delivery"
                    checked
                    readOnly
                  />
                  <span className="checkmark"></span>
                </div>
                <div className="delivery-text-group">
                  <div className="delivery-text-title">
                    <div>Standard Delivery</div>
                    <div>FREE</div>
                  </div>
                  <div className="delivery-text-desc">
                    Receive your order within 1 - 2 working days (Between 9am -
                    10px)
                    <br />
                    Estimated Delivery Date: {calShippingDate()}
                  </div>
                </div>
              </div>
            </div>
            <div className="delivery-form">
              <form>
                <div className="form-title">
                  <div>Delivery Address</div>
                  <div>* Mandatory fields are required.</div>
                </div>
                <div className="customer-name">
                  <div>
                    <input
                      type="text"
                      name="first"
                      id="first"
                      value={customer.first}
                      placeholder="First Name*"
                      onChange={handleInput}
                    />
                    { errors.first && <div className="error-text">{errors.first}</div>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="last"
                      id="last"
                      value={customer.last}
                      placeholder="Last Name*"
                      onChange={handleInput}
                    />
                    { errors.last && <div className="error-text">{errors.last}</div>}
                  </div>
                </div>
                <div className="customer-address">
                  <label htmlFor="address">Address</label>
                  <div>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={customer.address}
                      placeholder="Address*"
                      onChange={handleInput}
                    />
                    { errors.address && <div className="error-text">{errors.address}</div>}
                  </div>
                </div>
                <div className="customer-contact">
                  <label htmlFor="contact">Contact Number*:</label>
                  <div>
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      value={customer.contact}
                      placeholder="Contact Number"
                      onChange={handleInput}
                    />
                    { errors.contact && <div className="error-text">{errors.contact}</div>}
                  </div>
                </div>
                <div className="submit-btn">
                  <button onClick={handleSubmit}>Complete Order</button>
                </div>
              </form>
            </div>
          </div>
          <div className="order-summary-container">
            <div className="summary-details">
              <div className="title">Order Summary</div>
              <div className="subtotal-info">
                <div className="subtotal-text">
                  <div>Subtotal</div>
                  <div>S${cartTotal}</div>
                </div>
                <div className="delivery-text">
                  <div>Delivery</div>
                  <div>FREE</div>
                </div>
              </div>
              <div className="total-info">
                <div>Total:</div>
                <div>S${cartTotal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
