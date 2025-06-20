import axios from "axios";

const API = axios.create({
  baseURL: "https://solo-sparks-backend-3.onrender.com/api",
});

export const loginUser = async (email, password) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data.token;
};

export const registerUser = async (email, password) => {
  const res = await API.post("/auth/register", { email, password });
  return res.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await API.get("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
