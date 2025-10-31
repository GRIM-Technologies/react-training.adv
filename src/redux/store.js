import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './userReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;
