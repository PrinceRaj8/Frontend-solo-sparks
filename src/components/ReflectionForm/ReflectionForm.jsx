import React, { useState } from "react";

const ReflectionForm = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("text", text);
    if (image) formData.append("image", image);
    if (audio) formData.append("audio", audio);

    const res = await fetch(
      "https://solo-sparks-backend-3.onrender.com/api/reflections",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const data = await res.json();
    alert("Reflection submitted successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Your Reflection</h2>
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Write your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="my-2">
        <label>Image: </label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div className="my-2">
        <label>Audio: </label>
        <input type="file" accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} />
      </div>
      <button className="bg-green-600 text-white p-2 rounded mt-2" onClick={handleSubmit}>
        Submit Reflection
      </button>
    </div>
  );
};

export default ReflectionForm;
