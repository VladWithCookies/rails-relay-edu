import React from 'react'
import { HashProtocol, queryMiddleware } from 'farce'
import { createFarceRouter, createRender } from 'found'
import { Resolver } from 'found-relay'

import environment from './environment'
import routes from './routes'

const Router = createFarceRouter({
  historyProtocol: new HashProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,
  render: createRender({}),
})

const App = () =>
  <Router resolver={new Resolver(environment)} />

export default App
