import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('partner')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('partner')
    )}`;
  }
  return req;
});

export const signin = (values) => API.post('/auth/login', values);
export const register = (values) => API.post('/auth/register', values);

export const fetchUsers = () => API.get('/users');
export const fetchUser = (id) => API.get(`/users/${id}`);
export const fetchMyAccount = (id) => API.get(`/users/${id}`);
export const fetchStaticInvestments = () => API.get('/static/investments');
