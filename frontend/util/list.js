export const postList = (list) => {
    debugger
    return $.ajax({
        url: '/api/lists',
        method: 'POST',
        data: { list }
    });
};

export const deleteSession = () => {
    return $.ajax({
        url: '/api/lists',
        method: 'DELETE'
    })
}