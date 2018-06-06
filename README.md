## Rails Relay integration

1. Add this to your Gemfile: 

```ruby
gem 'graphql'
gem 'graphql-relay'
```

2. Create your grpahql schema (example at ```app/graph```)
3. Create ```graphqls_controller```:

```ruby
class Api::V1::GraphqlsController < ApplicationController
  def create
    query_string = params[:query]
    query_variables = params[:variables] || {}
    context = {}
    result = Schema.execute(query_string, variables: query_variables, context: context)
    render json: result
  end
end
```

4. 
