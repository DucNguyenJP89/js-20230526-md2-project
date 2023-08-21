import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Footer() {
  return (
    <div className="p-footer">
      <div className="actions">
        <div className="subscribe">
          <form action="">
            <div className="input-mail">
              <input
                type="text"
                name="subscribe"
                id=""
                placeholder="Subscribe to our newsletter"
              />
              <button>
                <FontAwesomeIcon icon={icon({ name: "chevron-right" })} />
              </button>
            </div>
          </form>
        </div>
        <div className="connects">
          <p>Let's Connect</p>
          <ul className="connect-sns">
            <li>
              <NavLink to="https://www.facebook.com/PedroShoes" target="_blank">
                <FontAwesomeIcon
                  icon={icon({ name: "facebook-f", style: "brands" })}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/pedroshoes_official/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={icon({ name: "instagram", style: "brands" })}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://twitter.com/pedroshoes" target="_blank">
                <FontAwesomeIcon
                  icon={icon({ name: "twitter", style: "brands" })}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.youtube.com/user/PEDROVIDEOCHANNEL"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={icon({ name: "youtube", style: "brands" })}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.tiktok.com/@pedroshoes_official"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={icon({ name: "tiktok", style: "brands" })}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.pinterest.com/pedroshoes/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={icon({ name: "pinterest", style: "brands" })}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="links">
        <div className="links-group">
          <div className="shop-with-us">
            <h4>SHOPPING WITH US</h4>
            <ul className="links-list">
              <li>
                <NavLink>My Account</NavLink>
              </li>
              <li>
                <NavLink>Delivery</NavLink>
              </li>
              <li>
                <NavLink>Returns & Refunds</NavLink>
              </li>
              <li>
                <NavLink>Promotions</NavLink>
              </li>
              <li>
                <NavLink>Payment</NavLink>
              </li>
              <li>
                <NavLink>Size Guide</NavLink>
              </li>
            </ul>
          </div>
          <div className="customer-care">
            <h4>CUSTOMER CARE</h4>
            <ul className="links-list">
              <li>
                <NavLink>Order Status</NavLink>
              </li>
              <li>
                <NavLink>Contact Us</NavLink>
              </li>
              <li>
                <NavLink>FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className="about">
            <h4>ABOUT US</h4>
            <ul className="links-list">
              <li>
                <NavLink>Brand Story</NavLink>
              </li>
              <li>
                <NavLink>CHARLES & KEITH GROUP</NavLink>
              </li>
              <li>
                <NavLink>Store Locator</NavLink>
              </li>
              <li>
                <NavLink>Sustainability</NavLink>
              </li>
              <li>
                <NavLink>Franchising Opportunities</NavLink>
              </li>
              <li>
                <NavLink>Affiliates</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="payment-methods">
          <p>ACCEPTED PAYMENT METHODS</p>
          <div className="payment-cards">
            <div className="card-item">
              <img
                src="https://image.cnbcfm.com/api/v1/image/105663691-1546878629366800.jpg?v=1546878641&w=630&h=354&ffmt=webp&vtcrop=y"
                alt="master"
              />
            </div>
            <div className="card-item">
              <img
                src="https://dwglogo.com/wp-content/uploads/2016/08/Visa-logo-1024x705.png"
                alt="visa"
              />
            </div>
            <div className="card-item">
              <img
                src="https://www.idsolutions.com.vn/wp-content/uploads/2017/12/ids-software-vietnam-american-express-client-2.jpg"
                alt="amex"
              />
            </div>
            <div className="card-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/527px-PayPal_logo.svg.png"
                alt="paypal"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="trademark">
        <ul>
          <li>&copy; PEDROSHOES.COM, all rights reserved.</li>
          <div className="td-divider"></div>
          <li>
            <NavLink>Terms of Use</NavLink>
          </li>
          <div className="td-divider"></div>
          <li>
            <NavLink>Privacy Policy</NavLink>
          </li>
          <div className="td-divider"></div>
          <li>
            <NavLink>Cookies Policy</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
