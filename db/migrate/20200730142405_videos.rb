class Videos < ActiveRecord::Migration[5.2]
  def change
    create_table :vidoes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.timestamp
    end
  end
end


