import axios from 'axios';

const apiBrands = axios.create({
    baseURL: 'http://localhost:4003',
});

export default apiBrands;