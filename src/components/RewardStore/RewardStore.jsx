import React from "react";

const rewards = [
  { name: "Profile Boost", cost: 50 },
  { name: "Hidden Prompt", cost: 30 },
  { name: "Exclusive Audio", cost: 70 }
];

const RewardStore = () => {
  const redeem = (reward) => {
    alert(`Redeemed: ${reward.name}`);
  };

  return (
    <div className="p-4 bg-purple-100 rounded mb-4">
      <h3 className="text-lg font-bold mb-2">🎁 Rewards Store</h3>
      {rewards.map((r, i) => (
        <div key={i} className="flex justify-between mb-2 p-2 bg-white rounded shadow">
          <span>{r.name}</span>
          <button
            className="bg-purple-600 text-white px-2 py-1 rounded"
            onClick={() => redeem(r)}
          >
            {r.cost} pts
          </button>
        </div>
      ))}
    </div>
  );
};

export default RewardStore;
