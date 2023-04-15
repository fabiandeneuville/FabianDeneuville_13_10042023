import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducers/loginReducer';
import loginSaga from './sagas/loginSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: loginReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(loginSaga);

export default store;