import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_STARTED,
    LOGOUT_SUCCESS,
    GET_USER_DATA_STARTED,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    UPDATE_PROFILE_STARTED,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
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

export const loginSuccess = (user) => {
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

export const logoutStarted = () => {
    return {
        type: LOGOUT_STARTED
    };
};

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

export const getUserDataStarted = (token) => {
    return {
        type: GET_USER_DATA_STARTED,
        payload: {
            token
        }
    };
};

export const getUserDataSuccess = (user) => {
    return {
        type: GET_USER_DATA_SUCCESS,
        payload: {
            user
        }
    };
};

export const getUserDataFailure = (error) => {
    return {
        type: GET_USER_DATA_FAILURE,
        payload: {
            error
        }
    };
};

export const updateProfileStarted = ({firstName, lastName}) => {
    return {
        type: UPDATE_PROFILE_STARTED,
        payload: {
            firstName,
            lastName
        }
    };
};

export const updateProfileSuccess = (updatedUser) => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: {
            updatedUser
        }
    };
};

export const updateProfileFailure = (error) => {
    return {
        type: UPDATE_PROFILE_FAILURE,
        payload: {
            error
        }
    };
};