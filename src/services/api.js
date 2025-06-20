import axios from "axios";

const BASE_URL = "https://solo-sparks-backend-3.onrender.com/api";

// Axios instance with base config
const API = axios.create({
  baseURL: BASE_URL,
});

// Add token to each request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


// 🔐 Auth APIs
export const registerUser = async (email, password) => {
  const res = await API.post("/auth/register", { email, password });
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data; // contains token
};


// 👤 User Profile
export const getUserProfile = async () => {
  const res = await API.get("/user/profile");
  return res.data;
};


// 🧠 Daily Quest (currently from profile or later smart engine)
export const getDailyQuest = async () => {
  const res = await API.get("/user/quest");
  return res.data;
};


// 📤 Reflection Submission (text + optional image/audio)
export const submitReflection = async (formData) => {
  const res = await API.post("/reflections", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export default API;
