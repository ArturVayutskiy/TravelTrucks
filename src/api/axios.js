import axios from "axios";
import { refreshUser } from "../redux/auth/operations";
import { store } from "../redux/store.js";

export const API = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config; // can use directly error.config._retry
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshUser());
      } catch (refreshError) {
        API.defaults.headers.common.Authorization = "";
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
