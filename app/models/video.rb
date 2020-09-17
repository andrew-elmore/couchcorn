class Video < ApplicationRecord
    has_one_attached :film
    has_one_attached :thumbnail

    has_many :assignments,
        class_name: :CatAssignment,
        foreign_key: :video_id

    has_many :categories,
        through: :assignments,
        source: :category


    has_many :list_assignments,
        class_name: :List,
        foreign_key: :video_id

    has_many :categories,
        through: :list_assignments,
        source: :account
end