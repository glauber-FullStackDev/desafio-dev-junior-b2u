import axios from 'axios';

const apiUsers = axios.create({
    baseURL: 'http://localhost:4003',
});

export default apiUsers;