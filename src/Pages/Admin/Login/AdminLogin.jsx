import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.scss"

function AdminLogin() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin');
  const adminUser = {
    email: "admin@ducnguyen.com",
    password: "test@123456"
  };
  const [ userInput, setUserInput ] = useState({
    email: '',
    password: ''
  });
  const [ errors, setErrors ] = useState({});
  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/products");
    }
  })
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputErrors = {};
    setErrors({});
    if (userInput.email === '') {
      inputErrors.email = "Please input your email";
      console.log(inputErrors);
      setErrors(errors => ({
        ...errors,
        email: 'Please input your email',
      }));
    }
    if (userInput.password === '') {
      inputErrors.password = "Please input your password";
      console.log(inputErrors);
      setErrors(errors => ({
        ...errors,
        password: inputErrors.password
      }));
    }
    if (Object.keys(inputErrors).length === 0) {
      if (userInput.email === adminUser.email && userInput.password === adminUser.password) {
        localStorage.setItem('isAdmin', true);
        Swal.fire({
          title: "Logged in as admin",
          confirmButtonText: "To Admin dashboard",
          confirmButtonColor: "#000"
        }).then(() => {
          navigate('/admin');
        })
        setUserInput({
          email: '',
          password: ''
        })
      } else {
        setErrors(errors => ({
          ...errors,
          authenFail: 'You have no permission'
        }))
      }
    }
  }
  return (
    <div className="admin-login">
      <h2>Sign In</h2>
      <div className="form">
        { errors.authenFail && <div className="authen-error">{errors.authenFail}</div>}
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
          {errors.password && <div className="error">{errors.password}</div>}
          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
