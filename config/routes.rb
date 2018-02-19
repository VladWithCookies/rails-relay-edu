Rails.application.routes.draw do
  devise_for :users

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/api/v1/graphql'
  end

  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      post 'graphql' => 'graphqls#create'
    end
  end

  get '*path', to: 'pages#index'
end
