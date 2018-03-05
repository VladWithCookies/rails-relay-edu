import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) =>
  <div>
    <Sidebar />
    <div className='main-content'>
      {children}
    </div>
  </div>

export default createFragmentContainer(
  MainLayout,
  graphql`
    fragment MainLayout_viewer on User {
      id
    }
  `
)
