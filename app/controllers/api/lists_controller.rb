class Api::ListsController < ApplicationController

  def create
      List.create(list_params)
      @account = Account.find(params[:listData][:account_id])
      render :show
  end
  
  def destroy
    @account_item = List.find(params[:id])
    @account_item.destroy
  end

    def show
      @account = Account.find(params[:id])
      render :show
    end

  private

  def list_params
    params.require(:listData).permit(:account_id, :video_id)
  end
end