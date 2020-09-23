@account.assignments.each do |assingment|
    json.set! assingment.id do
        json.thumbnailurl url_for(assingment.video.thumbnail)
        json.extract! assingment.video, :id, :title
    end
end