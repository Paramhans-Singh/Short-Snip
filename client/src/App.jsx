import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import Dashboard from "./components/DashBoard";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="container">
      <Navbar onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Hero /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/register"
          element={
            isLoggedIn ? <Hero /> : <Register onRegister={handleRegister} />
          }
        />
        <Route
          path="/"
          element={isLoggedIn ? <Hero /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
