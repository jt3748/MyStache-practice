Rails.application.routes.draw do
  get 'products/rocks'
  get 'products/rosin'
  get 'products/flower'
  get 'products/carts'
  get 'simple_pages/index'
  get 'simple_pages/products'
  get 'simple_pages/contact'
  get 'simple_pages/gallery'
  resources :photos
  root 'simple_pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
