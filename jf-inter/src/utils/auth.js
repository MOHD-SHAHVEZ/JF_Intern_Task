export const setToken = (token) => {
  localStorage.setItem("token", token); // store token in chrome or browser localstorage
};

export const getToken = () => {
  return localStorage.getItem("token"); // token get karo
};

export const logout = () => {
  localStorage.removeItem("token"); // logout pe token remove karo
};
