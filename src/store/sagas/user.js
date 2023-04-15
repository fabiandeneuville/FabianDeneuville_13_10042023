import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    LOGIN_STARTED, 
    LOGOUT_STARTED,
    GET_USER_DATA_STARTED
} from '../types';
import { 
    login, 
    getUserData 
} from '../requests';
import { 
    loginSuccess, 
    loginFailure, 
    logoutSuccess,
    getUserDataSuccess,
    getUserDataFailure
} from '../action';
import { 
    tokenToLocalStorage, 
    tokenToSessionStorage 
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
        const message = error.response.data.message;
        yield put(loginFailure(message));
    }
};

function* getUser(action){
    const token = action.payload.token;
    try {
        const userApiResponse = yield call(getUserData, token);
        const user = userApiResponse.data.body;
        yield put(getUserDataSuccess(user));
    }
    catch(error){
        const message = error.response.data.message;
        yield put(getUserDataFailure(message));
    }
}

function* logoutUser(){
    localStorage.clear();
    sessionStorage.clear();
    yield put(logoutSuccess());
    window.location.href = '/';
};

export default function* loginSaga(){
    yield takeLatest(LOGIN_STARTED, loginUser);
    yield takeLatest(GET_USER_DATA_STARTED, getUser);
    yield takeLatest(LOGOUT_STARTED, logoutUser);
};