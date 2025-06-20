import React, { useState } from "react";

const moods = ["😄", "🙂", "😐", "☹️", "😢"];

const MoodInput = ({ onMoodSubmit }) => {
  const [selected, setSelected] = useState(null);

  const submitMood = () => {
    if (selected !== null) onMoodSubmit(moods[selected]);
  };

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2">What's your mood?</h3>
      <div className="flex gap-2 text-2xl">
        {moods.map((mood, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`p-2 rounded-full ${
              selected === idx ? "bg-blue-300" : "bg-gray-100"
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
      <button
        className="bg-blue-600 text-white p-2 rounded mt-4"
        onClick={submitMood}
      >
        Submit Mood
      </button>
    </div>
  );
};

export default MoodInput;
