import React from 'react'
import { QueryRenderer } from 'react-relay'
import environment from 'environment'
import { PostsQuery } from 'graphql/queries/PostsQuery'
import PostList from './components/PostList'
import Post from './components/Post'

const PostListContainer = () =>
  <QueryRenderer
    environment={environment}
    query={PostsQuery}
    variables={{}}
    render={({error, props}) => {
      if (error) {
        return <div>{error.message}</div>
      } else if (props) {
        return <PostList {...props} />
      }
      return <div>Loading...</div>
    }}
  />

export default PostListContainer
