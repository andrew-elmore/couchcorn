class CreateList < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :video_id
      t.integer :account_id
    end
  end
end
