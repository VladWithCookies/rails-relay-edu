import { graphql } from 'react-relay'

export const PostsQuery = graphql`
  query PostsQuery {
    posts {
      id
      created_at
    }
  }
`
