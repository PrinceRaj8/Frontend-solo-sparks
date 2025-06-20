// src/services/cloudinaryService.js
export const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "your_upload_preset"); // from Cloudinary settings

  const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/auto/upload", {
    method: "POST",
    body: data,
  });

  const json = await res.json();
  return json.secure_url; // returns the uploaded image/audio URL
};
