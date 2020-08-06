import * as utilCategories from '../util/categories'


export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories,
});


export const fetchCategories = () => dispatch => {
    return (
        utilCategories.fetchCategories()
            .then(categories => dispatch(receiveCategories(categories))))
}



