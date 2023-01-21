import axios from 'axios';

const apiCars = axios.create({
    baseURL: 'http://localhost:4003',
});

export default apiCars;