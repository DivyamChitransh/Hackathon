import axios from 'axios';
const API_URL = 'http://localhost:4000'

export const getAsanas = async () => await axios.get(`${API_URL}/yogasanas/asana`);
export const createAsanas = async (data) => await axios.post(`${API_URL}/yogasanas/asana`, data);
export const rateAsana = async (id, rating) => await axios.post(`${API_URL}/yogasanas/${id}/rate`, { rating });
export const getUserProgress = async (userId) => await axios.get(`${API_URL}/users/${userId}/progress`);
export const createUser = async (data) => await axios.post(`${API_URL}/users/user`, data);
