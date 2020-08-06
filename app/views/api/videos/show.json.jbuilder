json.extract! @video, :id, :title, :description
json.videourl  url_for(@video.film)
json.thumbnailurl  url_for(@video.thumbnail)