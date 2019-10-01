import axios from "axios";

const token = localStorage.getItem('token') || '';
axios.defaults.headers.common['Authorization'] = token;
console.log(process.env.VUE_APP_API_URL)

export default axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {'Authorization': token}
});