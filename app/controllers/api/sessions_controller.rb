class Api::SessionsController < ApplicationController
  def create

    @account = Account.find_by_credentials(
      params[:session][:account_email],
      params[:session][:password]
    )

    if @account
      login(@account)
      render json: {id: @account.id, email: @account.account_email}
    else
      render json: ["Invalid email/password"], status: 401
    end
  end

  def destroy
    @account = current_account
    if @account
      logout
      render json: ['Logout sucessful']
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
