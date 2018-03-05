import React from 'react'

const Comment = () =>
  <div className='ui comments'>
    <div className='comment'>
      <a className='ui circular image avatar'>
        <img src='https://picsum.photos/301' />
      </a>
      <div className='content'>
        <a className='author'>Matt</a>
        <div className='metadata'>
          <span className='date'>2 days ago</span>
        </div>
        <div className='text'>
          How artistic!
        </div>
      </div>
    </div>
  </div>

export default Comment
