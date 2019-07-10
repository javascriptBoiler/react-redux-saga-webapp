import { all, fork } from 'redux-saga/effects';

import * as userSaga from './usersSaga';

export default function* rootSaga() {
    yield all([
        ...Object.values(userSaga),
    ].map(fork));
}
