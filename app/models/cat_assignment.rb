class CatAssignment < ApplicationRecord
    belongs_to :category
    belongs_to :video
end
