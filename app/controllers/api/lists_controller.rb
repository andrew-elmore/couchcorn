class Api::Listsontroller < ApplicationController

  def create
    puts params
    # @account = Account.new(params.require(:account).permit(:account_id, :video_id))
  end

  def delete

  end

end