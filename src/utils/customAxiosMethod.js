/* eslint-disable no-param-reassign */

import axios from "axios";

const customAxiosMethod = axios.create({});
customAxiosMethod.interceptors.request.use(
  req => {
    // Add authorization key to config object if it exist
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.common.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  error => Promise.reject(error),
);
export default customAxiosMethod;
