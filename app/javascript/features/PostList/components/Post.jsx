import React from 'react'
import moment from 'moment'

const Post = ({ created_at }) =>
  <div className='column'>
    <div className='ui fluid card'>
      <div className='content'>
        <div className='right floated meta'>
          {moment(created_at).fromNow()}
        </div>
        <img className='ui avatar image' src='https://picsum.photos/200' /> Elliot
      </div>
      <div className='image'>
        <img src='https://picsum.photos/500' />
      </div>
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

export default Post
