import * as listUtil from '../util/list'

export const RECEIVE_LIST = 'RECEIVE_LIST';

const receivelist = list => ({
    type: RECEIVE_LIST,
    list,
});




export const fetchList = (account_id) => dispatch => {
    console.log('fetchList')
    return (
        listUtil.fetchList(account_id)
            .then(list => dispatch(receivelist(list)))
    )
}
export const createListItem = (listData) => dispatch => {
    console.log('createListItem')
    return (
        listUtil.createListItem(listData)
            .then(list => dispatch(receivelist(list)))
    )
}

export const deleteListItem = (listData) => dispatch => {
    console.log('deleteListItem')
    return (
        listUtil.deleteListItem(listData)
            .then(list => dispatch(receivelist(list)))
    )
}

