import { takeEvery, call, put } from 'redux-saga/effects';

const updateSettings = function* (action) {
  console.log('Updating settings...');
  const res = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: action,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = yield res.json();

  yield put({
    type: 'user/notifications/email__SUCCEEDED',
    payload: data.body.payload,
  });
  yield put({ type: 'user/notifications/email__COMPLETED' });
};

const saga = function* () {
  yield takeEvery('user/notifications/email__REQUESTED', updateSettings);
};

export default saga;
