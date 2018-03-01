import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from 'environment'
import PostList from './components/PostList'

const PostListContainer = () =>
  <QueryRenderer
    environment={environment}
    query={
      graphql`
        query PostListQuery {
          posts {
            ...PostList_posts
          }
        }
      `
    }
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
