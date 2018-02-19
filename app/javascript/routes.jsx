import React from 'react'
import { Switch, Route } from 'react-router'

import MainLayout from 'components/MainLayout'
import PostList from 'features/PostList/PostList'
import PhotoEditor from 'features/PhotoEditor/PhotoEditor'

export default (
  <MainLayout>
    <Switch>
      <Route path='/' exact component={PostList} />
      <Route path='/editor' component={PhotoEditor} />
    </Switch>
  </MainLayout>
)
