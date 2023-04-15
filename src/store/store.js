import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user';
import userSaga from './sagas/user';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: userReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(userSaga);

export default store;