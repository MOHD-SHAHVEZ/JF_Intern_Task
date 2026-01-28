import { getToken } from "../utils/auth";

const BASE_URL = "http://localhost:8080/api/auth";

export const apiFetch = async (url, options = {}) => {
  const token = getToken();

  // fetch token from backend side server
  const res = await fetch(BASE_URL + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {}),
    },
  });

  // check response is 200 or not 
  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
};
