import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    LOGIN_STARTED, 
    LOGOUT_STARTED,
    GET_USER_DATA_STARTED,
    UPDATE_PROFILE_STARTED
} from '../types';
import { 
    login, 
    getUserData,
    putUserProfile
} from '../requests';
import { 
    loginSuccess, 
    loginFailure, 
    logoutSuccess,
    getUserDataSuccess,
    getUserDataFailure,
    updateProfileSuccess,
    updateProfileFailure
} from '../action';
import { 
    tokenToLocalStorage, 
    tokenToSessionStorage,
    getToken
} from '../../utils';

function* loginUser(action){
    const credentials = {email: action.payload.email, password: action.payload.password};
    try {
        const loginApiResponse = yield call(login, credentials);
        const token = loginApiResponse.data.body.token;
        const userApiResponse = yield call(getUserData, token);
        const user = userApiResponse.data.body;
        yield put(loginSuccess(user));

        if(action.payload.rememberUser){
            tokenToLocalStorage(token);
        } else {
            tokenToSessionStorage(token);
        };
        window.location.href = '/user';
    }
    catch(error){
        const message = error.response && error.response.data ? error.response.data.message : error.message;
        yield put(loginFailure(message));
    };
};

function* getUser(action){
    const token = action.payload.token;
    try {
        const userApiResponse = yield call(getUserData, token);
        const user = userApiResponse.data.body;
        yield put(getUserDataSuccess(user));
    }
    catch(error){
        const message = error.response && error.response.data ? error.response.data.message : error.message;
        yield put(getUserDataFailure(message));
    };
}

function* logoutUser(){
    localStorage.clear();
    sessionStorage.clear();
    yield put(logoutSuccess());
    window.location.href = '/';
};

function* updateProfile(action){
    const profileData = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
    };
    const token = getToken();
    try {
        const apiResponse = yield call(putUserProfile, token, profileData);
        const updatedUser = apiResponse.data.body;
        yield put(updateProfileSuccess(updatedUser));
    }
    catch(error){
        console.log(error.message)
        const message = error.response && error.response.data ? error.response.data.message : error.message;
        yield put(updateProfileFailure(message));
    };
}

export default function* loginSaga(){
    yield takeLatest(LOGIN_STARTED, loginUser);
    yield takeLatest(GET_USER_DATA_STARTED, getUser);
    yield takeLatest(LOGOUT_STARTED, logoutUser);
    yield takeLatest(UPDATE_PROFILE_STARTED, updateProfile);
};