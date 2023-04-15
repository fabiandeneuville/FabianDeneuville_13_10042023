import axios from 'axios';

export const login = (credentials) => {
    const url = 'http://localhost:3001/api/v1/user/login';
    return axios.post(url, credentials)
};

export const getUserData = (token) => {
    const url = 'http://localhost:3001/api/v1/user/profile';
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return axios.post(url, null, config);
}

