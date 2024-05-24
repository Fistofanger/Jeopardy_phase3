import axios from 'axios';

export const request = axios.create({
  baseURL: '/api',
  withCredentials: true,
  // headers: {}
});

let accessToken = '';

function setAccessToken(token) {
  accessToken = token;
}

request.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    if (error.response.status === 403 && !prevRequest.sent) {
      const response = await request('/tokens/refresh');
      accessToken = response.data.accessToken;
      prevRequest.sent = true;
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return request(prevRequest);
    }
    return Promise.reject(error);
  },
);

export { setAccessToken };
