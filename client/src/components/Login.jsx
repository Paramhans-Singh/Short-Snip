import React from "react";
import "../styles/login.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const serverBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${serverBase}/api/auth/login`, {
        email,
        password,
      });

      onLogin();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      } else {
        console.error(error);
        alert("An error occurred");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="label-text">Email:</span>
          <input
            type="email"
            name="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span className="label-text">Password:</span>
          <input
            type="password"
            name="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
      <button className="register-button">
        <NavLink to="/register">New User | Register</NavLink>
      </button>
    </div>
  );
}

export default Login;
