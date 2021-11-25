import axios from "axios";

const BASE_URL = 'http://118.67.143.47:3000'
export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      withCredentials: "true",
    },
  });
  return request;
};