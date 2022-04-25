import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.dailymotion.com'
});

export default api;