import * as listUtil from '../util/list'

export const RECEIVE_CURRENT_LIST = 'RECEIVE_CURRENT_LIST';

const receiveCurrentListItem = listItem => ({
    type: RECEIVE_CURRENT_LIST,
    listItem,
});

export const createNewListItem = listItem => dispatch =>
    postList(listItem)
        .then(list => dispatch(receiveCurrentListItem(list)))
    ;



export const RECEIVE_LIST = 'RECEIVE_LIST';

const receivelist = list => ({
    type: RECEIVE_LIST,
    list,
});

export const fetchList = account_id => dispatch => {
    return (
        listUtil.fetchList(account_id)
            .then(list => dispatch(receivelist(list)))
    )
}