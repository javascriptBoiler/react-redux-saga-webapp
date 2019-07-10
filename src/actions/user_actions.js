import { USER } from '../constants';


export const auth = request => ({
    type: USER.AUTH,
    payload: request
});

export const updateUser = data => ({
    type: USER.UPDATEUSER,
    payload: data
});

export const loginErr = err => ({
    type: USER.UPDATERR,
    payload: err
});

export const startLoading = () => ({
    type: USER.PAGELOADING,
});

export const startvalidating = () => ({
    type: USER.PAGEVALIDATING,
});

export const noGrant = () => ({
    type: USER.NOGRANTED,
});

export const callAuth = () => ({
    type: USER.SAGA_AUTH,
});

export const submitForm = (val) =>({
    type: USER.SAGA_LOGIN,
    val,
})