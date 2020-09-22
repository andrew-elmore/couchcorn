class Api::ListsController < ApplicationController

  def create
      List.create(list_params)
      render :show
  end
  
  def destroy
    @account_item = List.find_by(account_id: params.require(:list)[:account_id], video_id: params.require(:list)[:video_id])
    @account_item.destroy
    render :show
  end

    def show
      @account = Account.find(params[:id])
      puts @account.videos
      render :show
    end

  private

  def list_params
    params.require(:list).permit(:account_id, :video_id)
  end
end