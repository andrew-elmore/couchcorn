import { RECEIVE_CURRENT_ACCOUNT, LOGOUT_CURRENT_ACCOUNT } from '../actions/session';

const _nullSession = {
    currentAccount: null
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_ACCOUNT:
            const currentAccount = action.account
            return Object.assign({}, {currentAccount});
            debugger;
        case LOGOUT_CURRENT_ACCOUNT:
            return _nullSession;
        default:
            return state;
    }
};
