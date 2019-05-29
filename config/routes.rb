Rails.application.routes.draw do
  scope '/api' do
    resources :reviews
    resources :movies
  end
  # /api/movies

end
