import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api';
import {
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
} from './constants';

function* fetchUser(action) {
  try {
    const user = yield call(api.fetchUser, action.payload.userId);
    yield put({ type: USER_FETCH_SUCCEEDED, user: user });
  } catch (e) {
    yield put({ type: USER_FETCH_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}

export default mySaga;
