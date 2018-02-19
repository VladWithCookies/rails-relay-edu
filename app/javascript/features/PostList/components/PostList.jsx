import React from 'react'
import { map } from 'utils'
import Navbar from './Navbar'
import Post from './Post'

const PostList = ({ posts }) =>
  <div>
    <Navbar />
    <div className='ui two column grid'>
      {map(posts, (post) => <Post key={post.id} {...post} />)}
    </div>
  </div>

export default PostList
