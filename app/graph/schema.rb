Schema = GraphQL::Schema.new(query: QueryType)

module RelaySchemaHelpers
  SCHEMA_DIR  = Rails.root.join('app/javascript/packs/')
  SCHEMA_PATH = File.join(SCHEMA_DIR, 'schema.json')

  def execute_introspection_query
    Rails.cache.fetch checksum do
      Schema.execute GraphQL::Introspection::INTROSPECTION_QUERY
    end
  end

  def checksum
    files = Dir['app/graph/**/*.rb'].reject { |f| File.directory?(f) }
    content = files.map { |f| File.read(f) }.join
    Digest::SHA256.hexdigest(content).to_s
  end

  def dump_schema
    FileUtils.mkdir_p(SCHEMA_DIR)
    result = JSON.pretty_generate(Schema.execute_introspection_query)
    unless File.exist?(SCHEMA_PATH) && File.read(SCHEMA_PATH) == result
      File.write(SCHEMA_PATH, result)
    end
  end
end

Schema.extend RelaySchemaHelpers
