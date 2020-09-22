export const createListItem = (listData) => {
    $.ajax({
        url: '/api/lists',
        method: 'POST',
        data: { listData }
    });
}

export const deleteListItem = (video_id, account_id) => {
    $.ajax({
        url: '/api/lists',
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

