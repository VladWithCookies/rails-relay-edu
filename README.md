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

4. Create rake task to sync client ```schema.graphql``` with server schema

```ruby
namespace :graphql do
  desc "Updates graphql schema.graphql"
  task update_schema: :environment do
    File.open('app/javascript/packs/schema.graphql', 'w') do |f|
      f.write(GraphQL::Schema::Printer.print_schema(Schema))
    end
  end
end
```

5. Setup relay environment on client

```js
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch('/api/v1/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => response.json())
}

const network = Network.create(fetchQuery)
const store = new Store(new RecordSource())
const environment = new Environment({ network, store })

export default environment
```

6. Configure router. I decided to use ```found``` instead of ```react-router``` because ```found``` offers integration with Relay Modern and Relay Classic via Found Relay. Found Relay runs queries for matched routes in parallel, and supports fetching Relay data in parallel with downloading async bundles from code splitting when using Relay Modern. Read more: https://facebook.github.io/relay/docs/en/routing.html.

```js
//app/javascript/App.jsx

import React from 'react'
import { HashProtocol, queryMiddleware } from 'farce'
import { createFarceRouter, createRender } from 'found'
import { Resolver } from 'found-relay'

import environment from './environment'
import routes from './routes'

const Router = createFarceRouter({
  historyProtocol: new HashProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,
  render: createRender({}),
})

const App = () =>
  <Router resolver={new Resolver(environment)} />

export default App
```

```js
//app/javascript/routes.jsx

import React from 'react'
import { Route, makeRouteConfig } from 'found'

import MainLayout from 'components/MainLayout'
import PostList from 'components/PostList/PostList'
import Post from 'components/PostPreview/Post'
import PhotoEditor from 'components/PhotoEditor/PhotoEditor'

const MainLayoutQuery = graphql`
  query routes_MainLayoutQuery {
    viewer {
      ...MainLayout_viewer
    }
  }
`

const PostListQuery = graphql`
  query routes_PostListQuery {
    posts {
      ...PostList_posts
    }
  }
`

const PostQuery = graphql`
  query routes_PostQuery($id: ID!) {
    post(id: $id) {
      ...Post_post
    }
  }
`

export default makeRouteConfig(
  <Route path='/' Component={MainLayout} query={MainLayoutQuery}>
    <Route Component={PostList} query={PostListQuery} />
    <Route path='posts/:id' Component={Post} query={PostQuery} />
    <Route path='editor' Component={PhotoEditor} />
  </Route>
)
```

7. Create some component. For example list of posts:

```js

import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { map } from 'utils'
import Navbar from './Navbar'
import PostCard from './PostCard'

const PostList = ({ posts }) =>
  <div>
    <Navbar />
    <div className='ui two column grid'>
      {map(posts, (post) =>
        <PostCard
          key={post.id}
          post={post}
        />)
      }
    </div>
  </div>

export default createFragmentContainer(
  PostList,
  graphql`
    fragment PostList_posts on Post @relay(plural: true) {
      id,
      ...PostCard_post
    }
  `
)
```
