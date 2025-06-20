import React from "react";
import Onboarding from "../components/Onboarding/Onboarding";
import MoodInput from "../components/MoodInput/MoodInput";
import QuestDisplay from "../components/QuestDisplay/QuestDisplay";
import ReflectionForm from "../components/ReflectionForm/ReflectionForm";
import SparkDashboard from "../components/SparkDashboard/SparkDashboard";
import RewardStore from "../components/RewardStore/RewardStore";
import ProgressTracker from "../components/ProgressTracker/ProgressTracker";

const Dashboard = () => {
  const handleOnboardingComplete = (answers) => {
    console.log("Onboarding Data:", answers);
  };

  const handleMoodSubmit = (mood) => {
    console.log("Mood submitted:", mood);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">🧠 Solo Sparks Dashboard</h1>
      <Onboarding onComplete={handleOnboardingComplete} />
      <MoodInput onMoodSubmit={handleMoodSubmit} />
      <QuestDisplay />
      <ReflectionForm />
      <SparkDashboard />
      <RewardStore />
      <ProgressTracker />
    </div>
  );
};

export default Dashboard;
