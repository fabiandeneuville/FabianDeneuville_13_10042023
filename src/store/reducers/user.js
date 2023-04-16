import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    GET_USER_DATA_STARTED,
    UPDATE_PROFILE_STARTED,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from '../types';

const initialState = {
    user: null,
    error: null,
    isRequesting: false
};

function user(state = initialState, action){
    switch (action.type){
        case LOGIN_STARTED : 
            return {
                ...state,
                isRequesting: true
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                user: action.payload.user,
                error: null,
                isRequesting: false
            };
        case LOGIN_FAILURE :
            return {
                ...state,
                user: null,
                error: action.payload.error,
                isRequesting: false
            };
        case GET_USER_DATA_STARTED :
            return {
                ...state,
                user: null,
                error: null,
                isRequesting: true
            };
        case GET_USER_DATA_SUCCESS :
            return {
                ...state,
                user: action.payload.user,
                error: null,
                isRequesting: false
            };
        case GET_USER_DATA_FAILURE :
            return {
                ...state,
                user: null,
                error: null,
                isRequesting: false
            }
        case LOGOUT_SUCCESS :
            return {
                ...state,
                user: null,
                error: null,
                isRequesting: false
            }
        case UPDATE_PROFILE_STARTED :
            return {
                ...state,
                isRequesting: true
            }
        case UPDATE_PROFILE_SUCCESS :
            return {
                ...state,
                error: null,
                user: action.payload.updatedUser,
                isRequesting: false
            }
        case UPDATE_PROFILE_FAILURE :
            return {
                ...state,
                error: action.payload.error,
                isRequesting: false
            }
        default :
            return state;
    };
};

export default user;