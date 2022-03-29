import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";

const token = localStorage.getItem('token') || '';


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'x-token': token 
    }
});