import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { setStatus } from './userSlice';

function authenticateUser() {
  console.log('Authenticating user...');
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
}

function validateTransaction() {
  console.log('Validating transaction...');
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
}

function executeTransfer() {
  console.log('Executing transfer...');
  return new Promise((resolve) => setTimeout(() => resolve('OK'), 1500));
}

function notifyUser() {
  console.log('Notifying user...');
  return new Promise((resolve) => setTimeout(() => resolve(true), 500));
}

function* transferWorkflow() {
  try {
    yield put(setStatus('Authenticating user...'));
    yield call(authenticateUser);

    yield put(setStatus('Validating transaction...'));
    yield call(validateTransaction);

    yield put(setStatus('Transferring funds...'));
    const result = yield call(executeTransfer);

    yield put(setStatus(`Transfer ${result}. Notifying user...`));
    yield call(notifyUser);

    yield put(setStatus('Transfer complete!'));
  } catch (error) {
    yield put(setStatus(`Transfer failed: ${error.message}`));
  }
}

function* userSaga() {
  yield takeEvery('user/startTransfer', transferWorkflow);
}

export default userSaga;
