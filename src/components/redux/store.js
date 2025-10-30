import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './userSlice';
import userSaga from './userSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);
