export const postList = (list) => {
    return $.ajax({
        url: '/api/lists',
        method: 'POST',
        data: { list }
    });
};