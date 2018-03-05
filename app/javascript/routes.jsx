import React from 'react'
import { Route, makeRouteConfig } from 'found'

import MainLayout from 'components/MainLayout'
import PostList from 'components/PostList/PostList'
import PhotoEditor from 'components/PhotoEditor/PhotoEditor'

export default  makeRouteConfig(
  <Route
    path='/'
    Component={MainLayout}
    query={
      graphql`
        query routes_MainLayoutQuery {
          viewer {
            ...MainLayout_viewer
          }
        }
      `
    }
  >
    <Route
      Component={PostList}
      query={
        graphql`
          query routes_PostListQuery {
            posts {
              ...PostList_posts
            }
          }
        `
      }
    />
    <Route
      path='editor'
      Component={PhotoEditor}
    />
  </Route>
)
