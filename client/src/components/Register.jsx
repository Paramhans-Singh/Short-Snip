import React from "react";
import "../styles/register.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const serverBase = import.meta.env.ServerURL ;

function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${serverBase}/api/auth/register`, {
        username,
        email,
        password,
      });

      onRegister();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("User already exists");
      } else {
        console.error(error);
        alert("Failed to register");
      }
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="register-label">
          Username:
          <input
            type="text"
            name="username"
            className="register-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="register-label">
          Email:
          <input
            type="email"
            name="email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="register-label">
          Password:
          <input
            type="password"
            name="password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button className="register-button">
        <NavLink to="/login">Already registered? | Log in</NavLink>
      </button>
    </div>
  );
}

export default Register;
