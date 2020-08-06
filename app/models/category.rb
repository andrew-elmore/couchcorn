class Category < ApplicationRecord
    has_many :assignments,
        class_name: :CatAssignment,
        foreign_key: :category_id

    has_many :videos,
        through: :assignments,
        source: :video
end
