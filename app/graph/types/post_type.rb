PostType = GraphQL::ObjectType.define do
  name 'Post'
  interfaces [NodeIdentification.interface]
  global_id_field :id
  field :id, !types.ID
  field :title, !types.String
  field :created_at, !types.String
  field :user, UserType
end
