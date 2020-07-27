class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :account_email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
      add_index :accounts, :account_email, unique: true
      add_index :accounts, :session_token, unique: true
  end
end