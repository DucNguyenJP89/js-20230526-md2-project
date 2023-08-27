import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.scss";

function Register() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState({
    first: "",
    last: "",
    birthday: "",
    gender: "",
    contact: "",
    email: "",
    password: "",
    confirmPw: "",
    newsletter: false,
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  });
  useEffect(() => {
    const submitData = () => {
      const formData = {
        first: userInput.first,
        last: userInput.last,
        birthday: userInput.birthday,
        gender: userInput.gender,
        contact: userInput.contact,
        email: userInput.email,
        password: userInput.password,
        newsletter: userInput.newsletter,
        agree: userInput.agree,
      };
      axios.post("http://localhost:8080/users", formData).then((res) => {
        alert('Registered successfully');
        console.log(res.data);
        navigate("/");
      }).catch((e) => console.log(e));
    }
    if (Object.keys(errors).length === 0 && submitting) {
      submitData();
      setSubmitting(false);
    } else {
      console.log("Errors");
    }
  }, [errors, submitting, userInput]); // eslint-disable-line react-hooks/exhaustive-deps
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((userInput) => ({
      ...userInput,
      [name]: value,
    }));
  };
  const handleCheck = (e) => {
    const name = e.target.name;
    setUserInput((userInput) => ({
      ...userInput,
      [name]: !userInput[name],
    }));
  };
  const isExistingUser = (email) => {
    let userIndex = users.findIndex((user) => user.email === email);
    console.log(userIndex);
    if (userIndex !== -1) {
      return true;
    } else {
      return false;
    }
  };
  const validPassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const result = pattern.test(password);
    console.log(result);
    return result;
  };
  const validateValue = (userInput) => {
    let errors = {};
    if (userInput.first === '') {
      errors.first = "This field is required";
    }
    if (userInput.last === '') {
      errors.last = "This field is required";
    }
    if (userInput.birthday === '') {
      errors.birthday = "This field is required";
    }
    if (userInput.gender === '') {
      errors.gender = "This field is required";
    }
    if (userInput.contact === '') {
      errors.contact = "This field is required";
    } else {
      let contactRegex = /^\d{10}$/;
      if (!contactRegex.test(userInput.contact)) {
        errors.contact = "Invalid phone number";
      }
    }
    if (userInput.email === '') {
      errors.email = "This field is required";
    } else {
      if (isExistingUser(userInput.email)) {
        errors.email = "User existed. Please try another email.";
      } else {
        if (!validPassword(userInput.password)) {
          errors.password = "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
        }
        if (userInput.password !== userInput.confirmPw) {
          errors.confirmPw = "Password did not match.";
        }
      }
    }
    return errors;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValue(userInput));
    setSubmitting(true);
  };
  return (
    <div className="register-page">
      <div className="form-title">
        <h2>Create An Account</h2>
        <p>
          Save your information to checkout faster, save items to your wishlist,
          and view your purchase and return history.
        </p>
      </div>
      <div className="reg-form">
        <span>* Mandatory fields are required.</span>
        <form>
          <div className="input-item">
            <input
              className={errors.first ? "error-input" : ""}
              type="text"
              name="first"
              id="first"
              placeholder="First Name*"
              value={userInput.first}
              onChange={handleInput}
            />
            {errors.first && <div className="error">{errors.first}</div>}
          </div>
          <div className="input-item">
            <input
              className={errors.last ? "error-input" : ""}
              type="text"
              name="last"
              id="last"
              placeholder="Last Name*"
              value={userInput.last}
              onChange={handleInput}
            />
            {errors.last && <div className="error">{errors.last}</div>}
          </div>
          <div className="input-item">
            <div className="dob">
              <label htmlFor="birthday">Date of Birth*:</label>
              <input
                className={errors.birthday ? "error-input" : ""}
                type="date"
                name="birthday"
                id="birthday"
                value={userInput.birthday}
                onChange={handleInput}
              />
            </div>
            {errors.birthday && <div className="error">{errors.birthday}</div>}
          </div>
          <div className="input-item">
            <div className="genderSelect">
              <label htmlFor="gender">Gender*:</label>
              <select
                className={errors.gender ? "error-input" : ""}
                name="gender"
                id="gender"
                value={userInput.gender}
                onChange={handleInput}
              >
                <option value="">Select Gender</option>
                <option name="gender" value="male">
                  Male
                </option>
                <option name="gender" value="female">
                  Female
                </option>
              </select>
            </div>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </div>
          <div className="input-item">
            <div className="phone">
              <label htmlFor="contact">Contact Number*:</label>
              <input
                className={errors.contact ? "error-input" : ""}
                type="text"
                name="contact"
                id="contact"
                placeholder="Contact Number"
                value={userInput.contact}
                onChange={handleInput}
              />
            </div>
            {errors.contact && <div className="error">{errors.contact}</div>}
          </div>
          <div className="input-item">
            <input
              className={errors.email ? "error-input" : ""}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address*"
              value={userInput.email}
              onChange={handleInput}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="input-item">
            <input
              className={errors.password ? "error-input" : ""}
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              value={userInput.password}
              onChange={handleInput}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="input-item">
            <input
              className={errors.confirmPw ? "error-input" : ""}
              type="password"
              name="confirmPw"
              id="confirm"
              placeholder="Confirm Password*"
              value={userInput.confirmPw}
              onChange={handleInput}
            />
            {errors.confirmPw && (
              <div className="error">{errors.confirmPw}</div>
            )}
          </div>
          <div className="input-item">
            <div className="newsletter">
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                checked={userInput.newsletter}
                onChange={handleCheck}
              />
              <label htmlFor="newsletter">
                Send me PEDRO new arrival updates, offers, and more.
              </label>
            </div>
            <div className="error"></div>
          </div>
          <div className="input-item">
            <div className="agree">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                value="agree"
                checked={userInput.agree}
                onChange={handleCheck}
              />
              <label htmlFor="agree">
                I agree to PEDRO's <a href="">Terms & Conditions</a> and{" "}
                <a href="">Privacy Policy</a>
              </label>
            </div>
            {errors.agree && <div className="error">{errors.agree}</div>}
          </div>
          <div className="input-item">
            <button className={!userInput.agree ? 'disabled' : ''} onClick={handleSubmit} disabled={userInput.agree ? false : true}>Create An Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
