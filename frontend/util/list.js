export const fetchList = (account_id) => {
    return $.ajax({
        url: `/api/lists/${account_id}`,
        method: "GET"
    })
}