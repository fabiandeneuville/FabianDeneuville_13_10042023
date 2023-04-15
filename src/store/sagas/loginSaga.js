import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_STARTED } from '../types';
import { login } from '../requests';
import { loginSucces, loginFailure } from '../action';

function* loginUser(action){
    const credentials = {email: action.payload.email, password: action.payload.password}
    try {
        const res = yield call(login, credentials);
        const user = res.data.body.token;
        yield put(loginSucces(user));
    }
    catch(error){
        const message = error.response.data.message;
        yield put(loginFailure(message));
    }
};

export default function* loginSaga(){
    yield takeLatest(LOGIN_STARTED, loginUser);
};