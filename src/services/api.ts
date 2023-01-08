import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;
const statusCodes = new Set([
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.NOT_FOUND,
  StatusCodes.INTERNAL_SERVER_ERROR,
]);
const displayError = (code: StatusCodes) => statusCodes.has(code);

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
