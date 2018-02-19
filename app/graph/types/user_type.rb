UserType = GraphQL::ObjectType.define do
  name 'User'

  field :id, types.ID
  field :username, types.String
  field :first_name, types.String
  field :last_name, types.String
  field :email, types.String
  field :created_at, types.String
end
