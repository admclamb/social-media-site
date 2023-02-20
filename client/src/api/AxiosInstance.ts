import axios from 'axios';
const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: backendUrl,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
