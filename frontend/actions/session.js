import {postAccount, postSession, deleteSession} from '../util/session'


export const RECEIVE_CURRENT_ACCOUNT = 'RECEIVE_CURRENT_ACCOUNT';
export const LOGOUT_CURRENT_ACCOUNT = 'LOGOUT_CURRENT_ACCOUNT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentAccount = account => ({
    type: RECEIVE_CURRENT_ACCOUNT,
    account,
});

const logoutCurrentAccount = () => ({
    type: LOGOUT_CURRENT_ACCOUNT,
});

export const createNewAccount = formAccount => dispatch => 
    postAccount(formAccount)
    .then(account => dispatch(receiveCurrentAccount(account)
    ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
    ));

export const login = formAccount => dispatch => 
    postSession(formAccount)
    .then(account => dispatch(receiveCurrentAccount(account)
    ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
    ));

export const logout = () => dispatch => 
    deleteSession()
    .then(() => dispatch(logoutCurrentAccount()));


export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});