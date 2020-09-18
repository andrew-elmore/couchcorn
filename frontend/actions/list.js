import { postList } from '../util/list'

export const RECEIVE_CURRENT_LIST = 'RECEIVE_CURRENT_LIST';

const receiveCurrentListItem = listItem => ({
    type: RECEIVE_CURRENT_LIST,
    listItem,
});

export const createNewListItem = listItem => dispatch =>
    postList(listItem)
        .then(list => dispatch(receiveCurrentListItem(list)))
    ;