import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>
          Welcome to <span className="highlight">Solo Sparks ✨</span>
        </h1>
        <p>
          A personal growth journey through meaningful solo quests.<br />
          Reflect. Grow. Evolve.
        </p>
        <div className="welcome-buttons">
          <Link to="/" className="btn btn-login">Login</Link>
          <Link to="/register" className="btn btn-register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
