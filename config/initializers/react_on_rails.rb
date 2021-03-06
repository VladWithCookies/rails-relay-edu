# frozen_string_literal: true
ReactOnRails.configure do |config|
  config.build_production_command = "RAILS_ENV=production bin/webpack"
  config.build_test_command = "RAILS_ENV=test bin/webpack"
  config.server_bundle_js_file = "app-bundle.js"
end
