import axios from "axios";

const API = axios.create({
  baseURL: "https://auth-backend.onrender.com/",
});

export default API;
