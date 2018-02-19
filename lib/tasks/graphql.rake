namespace :graphql do
  desc "Updates graphql schema.json"
  task update_schema: :environment do
    File.open('app/javascript/packs/schema.json', 'w') do |f|
      f.write(Schema.execute(GraphQL::Introspection::INTROSPECTION_QUERY).to_json)
    end
  end
end
