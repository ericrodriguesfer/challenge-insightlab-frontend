import axios from "axios";

const api = axios.create({
  baseURL: "https://chalenge-insightlab-api.herokuapp.com",
});

export default api;
