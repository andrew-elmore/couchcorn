Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resource :account, only: [:create]
    resources :videos, only: [:show, :index]
    resources :my_list, only: [:create, :destroy]
    resources :categories, only: [:index]
    resources :lists, only: [:create, :destroy]
  end
  root to: 'static_pages#root' 
  
  
end
