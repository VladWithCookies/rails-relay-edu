require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module IsomorphicEdu
  class Application < Rails::Application
    config.load_defaults 5.1

    config.autoload_paths << Rails.root.join('app/graph')
    config.autoload_paths << Rails.root.join('app/graph/types')
    config.autoload_paths << Rails.root.join('app/graph/mutations')
  end
end
