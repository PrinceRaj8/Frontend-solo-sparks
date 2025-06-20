import React from "react";

const ProgressTracker = () => {
  // Placeholder progress (can be based on completed quests)
  const progress = 60; // Example 60% growth

  return (
    <div className="p-4 bg-green-100 rounded">
      <h3 className="text-lg font-bold mb-2">📈 Emotional Growth</h3>
      <div className="w-full bg-white h-6 rounded-full shadow-inner">
        <div
          className="bg-green-600 h-6 rounded-full text-xs text-white text-center"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
