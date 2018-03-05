import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import moment from 'moment'
import CommentForm from './CommentForm'
import Comment from './Comment'

const Post = ({ post }) =>
  <div className='ui grid'>
    <div className='sixteen wide column'>
      <div className='ui fluid card'>
        <img className='ui fluid image' src='https://picsum.photos/1440/600' />
          <div className='content'>
            <div className='ui items'>
              <div className='item'>
                <div className='ui tiny circular image'>
                  <img src='https://picsum.photos/200' />
                </div>
                <div className='content'>
                  <a className='header'>{post.title}</a>
                  <div className='meta'>
                    <span>Vlad V</span>
                  </div>
                  <div className='extra'>
                    {moment(post.created_at).fromNow()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='ui text menu'>
              <a className='item'>
                <i className='heart outline icon' /> Like
              </a>
              <a className='item'>
                <i className='save outline icon' /> Save filter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='sixteen wide column'>
        <div className='ui fluid card'>
          <div className='content'>
            <CommentForm />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </div>

export default createFragmentContainer(
  Post,
  graphql`
    fragment Post_post on Post {
      title
      created_at
    }
  `
)
