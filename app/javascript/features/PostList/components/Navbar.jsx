import React from 'react'

const Navbar = () =>
  <div className='ui fluid card'>
    <div className='content'>
      <div className='ui fluid container'>
        <div className='ui fluid transparent left icon input'>
          <input type='text' placeholder='Search...' />
          <i className='search icon' />
        </div>
      </div>
      <div className='ui secondary pointing menu'>
        <a className='active item'>
          Stream
        </a>
        <a className='item'>
          Trending
        </a>
        <a className='item'>
          Popular
        </a>
      </div>
    </div>
  </div>

export default Navbar
