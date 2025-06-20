import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/api";
import SocialShareButton from "./SocialShareButton";

const QuestDisplay = () => {
  const [quest, setQuest] = useState(null);

  useEffect(() => {
    async function fetchQuest() {
      const profile = await getUserProfile();
      setQuest(profile?.dailyQuest || {
        title: "Watch the sunset",
        description: "Go to a quiet place and enjoy the sunset. Reflect for 5 minutes."
      });
    }
    fetchQuest();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Today's Quest</h2>
      {quest ? (
        <>
          <p className="text-lg">{quest.title}</p>
          <p className="text-sm mt-2">{quest.description}</p>
          <SocialShareButton quest={quest} />
        </>
      ) : (
        <p>Loading quest...</p>
      )}
    </div>
  );
};

export default QuestDisplay;
