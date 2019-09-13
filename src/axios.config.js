import axios from "axios";

const token = localStorage.getItem('token') || '';
axios.defaults.headers.common['Authorization'] = token;

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {'Authorization': token}
});