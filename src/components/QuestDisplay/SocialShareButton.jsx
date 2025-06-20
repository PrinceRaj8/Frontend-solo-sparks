import React from "react";

const SocialShareButton = ({ quest }) => {
  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Solo Sparks Quest",
        text: `I just completed a self-growth quest: ${quest.title}`,
        url: window.location.href
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <button onClick={share} className="mt-4 p-2 bg-pink-500 text-white rounded">
      Share This Quest
    </button>
  );
};

export default SocialShareButton;
