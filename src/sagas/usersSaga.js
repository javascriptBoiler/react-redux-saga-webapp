import { put, call, takeEvery, /*select*/ } from 'redux-saga/effects';
// put - update state
// call - api or action call
// select - get state 

import { USER } from '../constants';
import { fetchData } from '../api';
import { auth, noGrant, updateUser, loginErr, startLoading, startvalidating } from '../actions/user_actions';
import { api } from '../utils/config'

//const getState = state => state;

function* handleUserAuth() {
    try {
        // const getStae = yield select(getState);
        // console.log('state::::', getStae)
        yield put(startvalidating());
        const userDetail = yield call(fetchData, { method: 'get', url: api.getUser });

        if(userDetail.success){
            yield put(auth(userDetail.data));
        }else{
            yield put(noGrant());
        }

    } catch (error) {
        yield put(noGrant());
    }
}
function* handleUserLogin({ val }) {
    try {
        yield put(startLoading());
        const userDetail = yield call(fetchData, { method: 'post', url: api.userLogin, data: val });

        if (userDetail.success) {
            yield put(updateUser(userDetail));
            localStorage.setItem('authorized', userDetail.data.token)
        }

    } catch (error) {
        yield put(loginErr(error.message));
    }
}


export function* userAuthenticate() {
    yield takeEvery(USER.SAGA_AUTH, handleUserAuth);
}

export function* userLogin() {
    yield takeEvery(USER.SAGA_LOGIN, handleUserLogin);
}