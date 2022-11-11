import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const MyAlert = useAlert();
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
    localStorage.setItem("user", formData.email);
    MyAlert.show(`Welcome`);
    if (formData.email === "admin@admin.com" && formData.password === "123") {
      navigateTo("/Adminhotel");
    } else {
      navigateTo("/");
    }
  };
  return (
    <div>
      {" "}
      <Navbar />
      <div className="login">
        <form id="Formlogin" onSubmit={HandleSubmit}>
          <div className="form">
            <h1>Sign In</h1>
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

            <input type="submit" value="Sign In" />
          </div>
          <span>
            <div className="signin">
              <p>
                Don't have Account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
