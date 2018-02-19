import React from 'react'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) =>
  <div>
    <Sidebar />
    <div className='main-content'>
      {children}
    </div>
  </div>

export default MainLayout
