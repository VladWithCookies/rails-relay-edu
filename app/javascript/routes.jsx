import React from 'react'
import { Route, makeRouteConfig } from 'found'

import MainLayout from 'components/MainLayout'
import PostList from 'components/PostList/PostList'
import Post from 'components/PostPreview/Post'
import PhotoEditor from 'components/PhotoEditor/PhotoEditor'

const MainLayoutQuery = graphql`
  query routes_MainLayoutQuery {
    viewer {
      ...MainLayout_viewer
    }
  }
`

const PostListQuery = graphql`
  query routes_PostListQuery {
    posts {
      ...PostList_posts
    }
  }
`

const PostQuery = graphql`
  query routes_PostQuery($id: ID!) {
    post(id: $id) {
      ...Post_post
    }
  }
`

export default makeRouteConfig(
  <Route path='/' Component={MainLayout} query={MainLayoutQuery}>
    <Route Component={PostList} query={PostListQuery} />
    <Route path='posts/:id' Component={Post} query={PostQuery} />
    <Route path='editor' Component={PhotoEditor} />
  </Route>
)
