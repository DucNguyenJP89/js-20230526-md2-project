import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.scss"

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <h2>Sign In / Create An Account</h2>
      <div className="container">
        <div className="login">
          <h3>Sign In</h3>
          <p>Sign in for a faster checkout experience and to enjoy membership privileges.</p>
          <div className="form">
            <form action="">
              <input type="text" placeholder="Email Address*" required />
              <input type="password" placeholder="Password*" required />
              <button>Sign In</button>
              <Link>Forgot Your Password?</Link>
            </form>
          </div>
        </div>
        <div className="register">
          <h3>Create An Account</h3>
          <p>Save your information to check out faster, save items to your wishlist, and view your purchase and return history.</p>
          <button onClick={() => navigate("/register")}>Create An Account</button>
        </div>
      </div>
    </div>
  )
}

export default Login