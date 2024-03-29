import axios from 'axios';

const API_URL = 'https://reqres.in/api/';

const axiosRequest = axios.create({
    baseURL: API_URL
});

export const setAxiosToken = (token) => {
    if (token) {
        axiosRequest.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

export default axiosRequest;
