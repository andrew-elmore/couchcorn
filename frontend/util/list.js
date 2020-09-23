export const createListItem = (listData) => {
    return $.ajax({
        url: '/api/lists',
        method: 'POST',
        data: { listData }
    });
}

export const deleteListItem = (listData) => {
    return $.ajax({
        url: `/api/lists/${listData.account_id}`,
        method: 'DELETE',
        data: { listData }
    });
}

export const fetchList = (account_id) => {
    return $.ajax({
        url: `/api/lists/${account_id}`,
        method: "GET"
    })
}

