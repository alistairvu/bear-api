Rails.application.routes.draw do
  scope "/api" do
    get "/bears", to: "bears#index"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
