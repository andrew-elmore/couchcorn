@categories.each do |category|
    json.set! category.id do
        json.extract! category, :id, :name
        json.videos do 
            category.videos.each do |video|
                json.set! video.id do
                    json.thumbnailurl url_for(video.thumbnail)
                    json.extract! video, :id, :title
                end
            end
        end
    end
end


# @categories.each do |category|
#     json.set! category.id do
#         json.extract! category, :id, :name
#         json.videos category.videos
#         category.videos.each do |video|
#             json.set! video.id do
#                 json.partial! `api/videos/show`, video: video
#             end
#         end
#     end
# end

