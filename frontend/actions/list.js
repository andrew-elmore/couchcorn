import * as listUtil from '../util/list'

export const RECEIVE_LIST = 'RECEIVE_LIST';

const receivelist = list => ({
    type: RECEIVE_LIST,
    list,
});

export const fetchList = (account_id) => dispatch => {
    console.log('list')
    return (
        listUtil.fetchList(account_id)
            .then(list => dispatch(receivelist(list)))
    )
}