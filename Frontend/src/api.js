import axios from 'axios';

export const getAsanas = async () => await axios.get(`/yogasanas`);
export const createAsanas = async (data) => await axios.post(`/yogasanas`, data);
export const rateAsana = async (id, rating) => await axios.post(`/yogasanas/${id}/rate`, { rating });
export const getUserProgress = async (userId) => await axios.get(`/yogasanas/${userId}/progress`);
export const createUser = async (data) => await axios.post(`/users`, data);
