import axios from "axios";

const token = localStorage.getItem('token') || '';
axios.defaults.headers.common['Authorization'] = token;

export default axios.create({
    baseURL: 'http://192.168.0.100:8000/api',
    headers: {'Authorization': token}
});