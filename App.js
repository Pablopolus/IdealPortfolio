import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducers from './src/reducers'
// import IdealPortfolio from './src/components/IdealPortfolio'
import Navigation from './src/components/Navigation'

const store = createStore(reducers, {}, applyMiddleware())

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

