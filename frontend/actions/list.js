import * as listUtil from '../util/list'

export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

const receivelist = list => ({
    type: RECEIVE_LIST,
    list,
});
const removeList = list => ({
    type: REMOVE_LIST,
    list,
});




export const fetchList = (account_id) => dispatch => {
    return (
        listUtil.fetchList(account_id)
            .then(list => dispatch(receivelist(list)))
    )
}
export const createListItem = (listData) => dispatch => {
    return (
        listUtil.createListItem(listData)
            .then(list => dispatch(receivelist(list)))
    )
}

export const deleteListItem = (listData) => dispatch => {
    return (
        listUtil.deleteListItem(listData)
            .then(list => dispatch(removeList(list)))
    )
}

