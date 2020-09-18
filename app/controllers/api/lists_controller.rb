class Api::ListsController < ApplicationController

  def create
    @account_list = List.find_by(account_id: params.require(:list)[:account_id], video_id: params.require(:list)[:video_id])
    if @account_id == nil
      List.create(list_params)
    else
      List.destroy(list_params)
    end
    p List.all
  end



  private

  def list_params
    params.require(:list).permit(:account_id, :video_id)
  end
end