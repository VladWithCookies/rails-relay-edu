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
