import {postAccount, postSession, deleteSession} from '../util/session'


export const RECEIVE_CURRENT_ACCOUNT = 'RECEIVE_CURRENT_ACCOUNT';
export const LOGOUT_CURRENT_ACCOUNT = 'LOGOUT_CURRENT_ACCOUNT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveCurrentAccount = account => ({
    type: RECEIVE_CURRENT_ACCOUNT,
    account,
});

const logoutCurrentAccount = () => ({
    type: LOGOUT_CURRENT_ACCOUNT,
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,

}) 

export const createNewAccount = formAccount => dispatch => 
    postAccount(formAccount)
    .then(account => dispatch(receiveCurrentAccount(account)
    ), errors => {

        return dispatch(receiveErrors(errors.responseJSON))
    });

export const login = formAccount => dispatch => 
    postSession(formAccount)
    .then(account => dispatch(receiveCurrentAccount(account)
    ), errors => {
        return dispatch(receiveErrors(errors.responseJSON))
    });

export const logout = () => dispatch => 
    deleteSession()
    .then(() => dispatch(logoutCurrentAccount()));


export const receiveErrors = (errors) => {

    return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})};


