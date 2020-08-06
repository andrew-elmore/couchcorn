class CreateCatAssignment < ActiveRecord::Migration[5.2]
  def change
    create_table :cat_assignments do |t|
      t.integer :video_id
      t.integer :category_id
    end
  end
end
