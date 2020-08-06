class Video < ApplicationRecord
    has_one_attached :film
    has_one_attached :thumbnail

    has_many :assignments,
        class_name: :CatAssignment,
        foreign_key: :video_id

    has_many :categories,
        through: :assignments,
        source: :category
end