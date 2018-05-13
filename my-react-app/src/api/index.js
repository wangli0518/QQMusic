import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000';
axios.interceptors.response.use(function (response) {
    return response.data;
});
export default axios