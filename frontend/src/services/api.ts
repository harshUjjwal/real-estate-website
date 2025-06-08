import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
}

export interface SubscribeData {
  email: string;
}

export const authApi = {
  login: async (data: LoginData) => {
    const response = await api.post('/auth/login', data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  signup: async (data: SignupData) => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export const subscriptionApi = {
  subscribe: async (data: SubscribeData) => {
    const response = await api.post('/subscribe', data);
    return response.data;
  },
}; 