namespace :graphql do
  desc "Updates graphql schema.graphql"
  task update_schema: :environment do
    File.open('app/javascript/packs/schema.graphql', 'w') do |f|
      f.write(GraphQL::Schema::Printer.print_schema(Schema))
    end
  end
end
