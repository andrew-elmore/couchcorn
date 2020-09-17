class Account < ApplicationRecord

  attr_reader :password

  validates :account_email, :password_digest, :session_token, presence: true
  validates :account_email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :assignments,
    class_name: :MyList,
    foreign_key: :user_id


  # has_many :videos,
  #     through: :assignments,
  #     source: :video
  
  after_initialize :ensure_session_token




  def self.find_by_credentials(account_email, password)
    account = Account.find_by(account_email: account_email)
    return nil unless account
    account.is_password?(password) ? account : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while Account.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
