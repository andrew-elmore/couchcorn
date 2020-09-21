@account.videos.each do |video|
    json.set! video.id do
        json.thumbnailurl url_for(video.thumbnail)
        json.extract! video, :id, :title
    end
end



