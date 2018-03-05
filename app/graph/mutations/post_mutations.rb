module PostMutations
  Create = GraphQL::Relay::Mutation.define do
    name 'CreatePost'

    input_field :title, !types.String

    return_field :post, PostType

    resolve -> (obj, inputs, ctx) do
      binding.pry
      Post.create!(title: inputs[:title])
    end
  end
end
