CommentType = GraphQL::ObjectType.define do
  name 'Comment'
  interfaces [NodeIdentification.interface]
  global_id_field :id
  field :id, !types.ID
  field :content, !types.String
  field :user, UserType
  field :post, PostType
end
