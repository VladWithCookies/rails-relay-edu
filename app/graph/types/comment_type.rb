CommentType = GraphQL::ObjectType.define do
  name 'Comment'

  field :id, !types.ID
  field :content, !types.String
  field :user, UserType
  field :post, PostType
end
