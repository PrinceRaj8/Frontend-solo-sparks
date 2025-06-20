import React, { useEffect, useState } from "react";
import { getUserProfile } from "../services/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profile = await getUserProfile();
        setUser(profile);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    }

    fetchProfile();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Solo Sparks!</h1>
      {user ? <p className="mt-2">Hello, {user.email}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
