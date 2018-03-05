import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import moment from 'moment'
import { Link } from 'found'

const PostCard = ({ post }) =>
  <div className='column'>
    <div className='ui fluid card'>
      <div className='content'>
        <div className='right floated meta'>
          {moment(post.created_at).fromNow()}
        </div>
        <img className='ui avatar image' src='https://picsum.photos/200' /> Elliot
      </div>
      <Link to={`/posts/${post.id}`} className='image'>
        <img src='https://picsum.photos/500' />
      </Link>
      <div className='content'>
        <span className='right floated'>
          <i className='heart outline like icon' />
          17 likes
        </span>
        <i className='comment icon' />
        3 comments
      </div>
    </div>
  </div>

export default createFragmentContainer(
  PostCard,
  graphql`
    fragment PostCard_post on Post {
      id
      created_at
    }
  `
)
