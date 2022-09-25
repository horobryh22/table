import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.BASE_URL || `http://localhost:8080/api/items`,
});
