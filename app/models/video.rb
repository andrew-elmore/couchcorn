class Video < ApplicationRecord

 
    has_one_attached :film
    has_one_attached :thumbnail
end