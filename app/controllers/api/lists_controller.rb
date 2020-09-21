class Api::ListsController < ApplicationController

  def create
    @account_item = List.find_by(account_id: params.require(:list)[:account_id], video_id: params.require(:list)[:video_id])
    if @account_item == nil
      List.create(list_params)
    else
      @account_item.destroy
    end
  end

    def show
        @account = Account.find(params[:id])
        render :show
    end

  private

  def list_params
    params.require(:list).permit(:account_id, :video_id)
  end
end