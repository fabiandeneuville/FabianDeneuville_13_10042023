import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './types';

export const loginStarted = (email, password, rememberUser) => {
    return {
        type: LOGIN_STARTED,
        payload: {
            email,
            password,
            rememberUser
        }
    };
};

export const loginSucces = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user
        }
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: {
            error
        }
    };
};