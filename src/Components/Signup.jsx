import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const navigateTo = useNavigate();
  const HandleChange = (evt) => {
    let { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formData);
    if (formData.password !== formData.confirm_password) {
      alert(`Password and Confirm Password don't match!`);
      return;
    }
    alert(`Signup Successful! Please login to continue.`);
    navigateTo("/login");
  };
  return (
    <div>
      <Navbar />
      <div className="signup">
        <form className="formsignup" onSubmit={HandleSubmit}>
          <div className="formdiv">
            <h1>Sign Up</h1>

            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={HandleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={HandleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={HandleChange}
              required
            />
            <input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={HandleChange}
              required
            />
            <input type="submit" value="Submit" />
          </div>
          <span>
            <div className="signin">
              <p>
                Already registered ? <a href="/login">Sign In</a>
              </p>
            </div>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
