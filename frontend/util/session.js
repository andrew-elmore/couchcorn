export const postAccount = (account) => {
    return $.ajax({
        url: '/api/account',
        method: 'POST',
        data: { account }
    });
};

export const postSession = (session) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {session}
    })
}

export const deleteSession = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}