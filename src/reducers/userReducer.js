import { USER } from '../constants';
const initialState = {
    pageLoading: false,
    validating: true,
    userName: '',
    haspermition: true,
    token: null,
    errmessage: null,
    avatar: null,
    email: null, 
    first_name: null, 
    last_name: null, 
    id: 0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case USER.AUTH:
            return { ...state, pageLoading: false, validating: false, ...action.payload.data}
        case USER.NOGRANTED:
            return { ...state, pageLoading: false, haspermition: false }
        case USER.UPDATEUSER:
            return { ...state, ...action.payload.data, errmessage: null, pageLoading: false }
        case USER.UPDATERR:
            return { ...state, errmessage: action.payload, pageLoading: false }
        case USER.PAGELOADING:
            return { ...state, pageLoading: true }
        case USER.PAGEVALIDATING:
            return { ...state, validating: true }
        default:
            return state;
    }
}