import React from 'react'
import "./Register.scss"

function Register() {
  return (
    <div className="register-page">
      <div className="form-title">
        <h2>Create An Account</h2>
        <p>Save your information to checkout faster, save items to your wishlist, and view your purchase and return history.</p>
      </div>
      <div className="reg-form">
        <span>* Mandatory fields are required.</span>
        <form action="">
          <div className="input-item">
            <input type="text" name="first" id="first" placeholder='First Name*' />
            <div className="error">Error</div>
          </div>
          <div className="input-item">
            <input type="text" name="last" id="last" placeholder='Last Name*' />
            <div className="error"></div>
          </div>
          <div className="input-item">
            <div className="dob">
              <label htmlFor="dob">Date of Birth*:</label>
              <input type="date" name="dob" id="dob" />
            </div>
            <div className="error"></div>
          </div>
          <div className="input-item">
            <div className="genderSelect">
              <label htmlFor="gender">Gender*:</label>
              <select name="gender" id="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="error"></div>
          </div>
          <div className="input-item">
            <div className="phone">
              <label htmlFor="phone">Contact Number*:</label>
              <input type="text" name="phone" id="phone" placeholder='Contact Number' />
            </div>
            <div className="error"></div>
          </div>
          <div className="input-item">
            <input type="email" name="email" id="email" placeholder='Email Address*' />
            <div className="error"></div>
          </div>
          <div className="input-item">
            <input type="password" name="password" id="password" placeholder='Password*'/>
            <div className="error"></div>
          </div>
          <div className="input-item">
            <input type="password" name="confirm" id="confirm" placeholder='Confirm Password*'/>
            <div className="error"></div>
          </div>
          <div className="input-item">
            <div className="newsletter">
              <input type="checkbox" name="newsletter" id="newsletter" />
              <label htmlFor="newsletter">Send me PEDRO new arrival updates, offers, and more.</label>
            </div>
            <div className="error"></div>
          </div>
          <div className="input-item">
            <div className="agree">
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree">I agree to PEDRO's <a href=''>Terms & Conditions</a> and <a href=''>Privacy Policy</a></label>
            </div>
          </div>
          <div className="input-item">
            <button>Create An Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register