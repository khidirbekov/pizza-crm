import axios from "axios";

const baseURL = process.env.VUE_APP_TARGET;
const service = axios.create({
  baseURL: baseURL,
});

service.interceptors.request.use((config) => {
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

service.interceptors.response.use(
  (success) => Promise.resolve(success),
  (error) => {
    if (error.response.status === 403) window.location.replace("/401");
    // if (error.response.status === 401) {
    //   window.localStorage.removeItem('token')
    //   window.location.replace('/login')
    // }
    return Promise.reject(error);
  }
);

export default service;
