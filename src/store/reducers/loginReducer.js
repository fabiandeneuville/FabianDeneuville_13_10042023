import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
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
        default :
            return state;
    };
};

export default user;