import axios from 'axios';

export const api = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_URL,
  });
};