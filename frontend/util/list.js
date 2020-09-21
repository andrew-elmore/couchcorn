export const postList = (list) => {
    return $.ajax({
        url: '/api/lists',
        method: 'POST',
        data: { list }
    });
};


export const fetchList = (account_id) => {
    return $.ajax({
        url: `/api/list/${account_id}`,
        method: "GET"
    })
}