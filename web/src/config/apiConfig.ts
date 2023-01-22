import axios from 'axios';
import { getItemFromLocalStorage } from '../services/localStorage';
import {Auth} from '../helpers/interfaces/localStorage';

const baseURL = 'http://localhost:5002/';

const api = axios.create({ baseURL });

api.interceptors.request.use(async (config) => {
    const auth = getItemFromLocalStorage('BitMotors_user_token') as Auth || false;
    
    if (auth) {
        config.headers.Authorization = `bearer ${auth.token}`;
    }
  
    return config;
});

export default api;
