QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :viewer, UserType do
    resolve -> (obj, args, ctx) { User.last }
  end

  field :posts, types[PostType] do
    resolve -> (obj, args, ctx) { Post.all }
  end

  field :post, PostType do
    argument :id, !types.ID

    resolve -> (obj, args, ctx) { Post.find(args['id']) }
  end
end
