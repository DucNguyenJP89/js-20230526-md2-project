import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      alert('Logged in successfully');
      navigate("/");
    }
  }, [errors, submitting, userInput]); // eslint-disable-line react-hooks/exhaustive-deps
  const handleInput = (e) => {
    const {name, value} = e.target;
    setUserInput((userInput) => ({
      ...userInput,
      [name]: value,
    }))
  };
  const validateValue = (userInput) => {
    let errors = {};
    if (userInput.email === '') {
      errors.email = "This field is required";
    } else {
      let userIndex = users.findIndex((user) => user.email === userInput.email);
      console.log(userIndex);
      if (userIndex === -1) {
        errors.email = "No user found. Please check your email";
      } else {
        if (userInput.password !== users[userIndex].password) {
          errors.password = "Password did not match";
        }
      }
    }
    if (userInput.password === '') {
      errors.password = "This field is required";
    }
    return errors;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValue(userInput));
    setSubmitting(true);
  }
  return (
    <div className="login-page">
      <h2>Sign In / Create An Account</h2>
      <div className="container">
        <div className="login">
          <h3>Sign In</h3>
          <p>
            Sign in for a faster checkout experience and to enjoy membership
            privileges.
          </p>
          <div className="form">
            <form action="">
              <input
                className={errors.email ? "error-input" : ""}
                type="text"
                name="email"
                value={userInput.email}
                placeholder="Email Address*"
                onChange={handleInput}
                required
              />
              {errors.email && <div className="error">{errors.email}</div>}
              <input
                className={errors.password ? "error-input" : ""}
                type="password"
                name="password"
                value={userInput.password}
                placeholder="Password*"
                onChange={handleInput}
                required
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
              <button onClick={handleSubmit}>Sign In</button>
              <Link>Forgot Your Password?</Link>
            </form>
          </div>
        </div>
        <div className="register">
          <h3>Create An Account</h3>
          <p>
            Save your information to check out faster, save items to your
            wishlist, and view your purchase and return history.
          </p>
          <button onClick={() => navigate("/register")}>
            Create An Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
