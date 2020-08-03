export const fetchVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: "GET"
    })
}