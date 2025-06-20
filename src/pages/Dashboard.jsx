import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const user = localStorage.getItem("token");

  return (
    <div className="dashboard">
      <h1>Welcome to Solo Sparks Dashboard 🎉</h1>
      <p>Your token: {user ? user.slice(0, 20) + "..." : "Not logged in"}</p>
    </div>
  );
};

export default Dashboard;
