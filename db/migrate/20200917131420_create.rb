class Create < ActiveRecord::Migration[5.2]
  def change
      create_table :my_lists do |t|
      t.integer :video_id
      t.integer :user_id
      end
  end
end
