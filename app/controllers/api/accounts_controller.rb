class Api::AccountsController < ApplicationController
  def create

    @account = Account.new(account_params)

    if @account.save 
      login(@account)
      render json: {id: @account.id, email: @account.account_email}
    else

      render json: @account.errors.full_messages, status: 422
    end
  end

  private

  def account_params
    params.require(:account).permit(:account_email, :password)
  end
end
