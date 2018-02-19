import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Sidebar = () =>
  <div className='ui left fixed borderless vertical menu'>
    <h1 className='ui centered header logo'>Photonegro</h1>
    <div className='user-data'>
      <img className='ui centered tiny circular image' src='https://picsum.photos/400' />
      <h5 className='ui centered grey header'>Vlad V</h5>
    </div>
    <Link to='/' exact className='item'>
      <div>
        <i className='retro camera icon' />
        Gallery
      </div>
    </Link>
    <Link to='/editor' activeClassName='active' className='item'>
      <div>
        <i className='lab icon' />
        Photo Lab
      </div>
    </Link>
    <a className='item'>
      <div>
        <i className='options icon' />
        Options
      </div>
    </a>
    <a className='item'>
      <div>
        <i className='power icon' />
        Logout
      </div>
    </a>
  </div>

export default Sidebar
