import React from 'react'

const CommentForm = () =>
  <div>
    <h3>Comments</h3>
    <div className='ui form'>
      <div className="field">
        <textarea rows='2'/>
      </div>
      <div className='ui teal button'>Submit</div>
    </div>
  </div>

export default CommentForm
