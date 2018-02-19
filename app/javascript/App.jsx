import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

import PostList from 'features/PostList/PostList'

const App = () =>
  <PostList />
  {/* <BrowserRouter>
    {routes}
  </BrowserRouter> */}

export default App
