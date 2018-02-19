PostType = GraphQL::ObjectType.define do
  name 'Post'

  field :id, types.ID
  field :title, types.String
  field :created_at, types.String
  field :user, UserType
end
