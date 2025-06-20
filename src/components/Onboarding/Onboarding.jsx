import React, { useState } from "react";

const steps = [
  "How are you feeling today?",
  "Which personality type fits you best?",
  "What are you hoping to achieve with Solo Sparks?"
];

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else onComplete(answers);
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [step]: e.target.value });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Step {step + 1}</h2>
      <p>{steps[step]}</p>
      <textarea
        className="border p-2 w-full mt-2 rounded"
        rows={3}
        onChange={handleChange}
        value={answers[step] || ""}
      />
      <button
        className="bg-purple-600 text-white p-2 rounded mt-4"
        onClick={handleNext}
      >
        {step < steps.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default Onboarding;
