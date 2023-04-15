import axios from 'axios';

export const login = (credentials) => {
    return axios.post('http://localhost:3001/api/v1/user/login', credentials)
};

