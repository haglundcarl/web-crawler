import * as actionTypes from "../actions/ActionTypes";
import update from '../utility'


const initState = {
    token : null,
    error : null,
    loading : false,
}

const authStart = (state, action) => {
    return update(state, {error : null, loading : true})
}

const authSuccess = (state, action) => {
    return update(state, {error : null, loading : false, token : action.token})
}

const authFailed = (state, action) => {
    return update(state, {error : action.error, loading : false})
}

const authLogout = (state, action) => {
    return update(state, {token: null})
}


const authReducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action); // returns a copy of the new state
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAILED: return authFailed(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}

export default authReducer;