import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    localStorage.setItem("user", formData.email);
    alert(`Welcome`);
    navigateTo("/");
  };
  return (
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
      </form>
    </div>
  );
};

export default Login;
