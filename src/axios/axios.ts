import axios from 'axios';
import qs from 'qs';
import {Auth} from '../store/zustore/AuthStorage';

export const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    mode: 'cors',
    'Content-Type': 'application/json',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  },
  paramsSerializer: {
    serialize: params => {
      return qs.stringify(params, {arrayFormat: 'repeat'});
    },
  },
});

axiosInstance.interceptors.request.use(async config => {
  const token = Auth.getToken();

  if (token.refreshToken) {
    if (token.accessToken) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
  } else {
    Auth.signOut();
  }

  return config;
});
