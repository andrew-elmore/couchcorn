class Api::SessionsController < ApplicationController
  def create
    @account = Account.find_by_credentials(
      params[:account][:account_email],
      params[:account][:password]
    )

    if @account
      login(@account)
      render "/api/video/"
    else
      render json: ["Invalid email/password"], status: 401
    end
  end

  def destroy
    @account = current_account
    if @account
      logout
      render "/"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
