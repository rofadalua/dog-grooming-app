Rails.application.routes.draw do

  

  namespace :api do
  namespace :g1 do
  resources :users
  resources :bookings
 
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
