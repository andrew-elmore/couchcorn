class Api::ListsController < ApplicationController

  def create
      List.create(list_params)
      @account = Account.find(params[:listData][:account_id])
      render :show
  end
  
  def destroy
    @account_item = List.find_by(account_id: params[:listData][:account_id], video_id: params[:listData][:video_id])
    @account_item.destroy
    @account = Account.find(params[:id])
    render :show
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