class DropVidoes < ActiveRecord::Migration[5.2]
  def change
    drop_table :vidoes
  end
end
