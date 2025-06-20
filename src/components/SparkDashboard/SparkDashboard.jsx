import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/api";

const SparkDashboard = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    async function fetchPoints() {
      const user = await getUserProfile();
      setPoints(user.sparkPoints || 0);
    }
    fetchPoints();
  }, []);

  return (
    <div className="p-4 bg-yellow-100 rounded mb-4">
      <h3 className="text-lg font-bold">🌟 Spark Points</h3>
      <p className="text-3xl text-yellow-600 font-bold">{points}</p>
      <p className="text-sm mt-1">Earn more by completing quests & reflections!</p>
    </div>
  );
};

export default SparkDashboard;
