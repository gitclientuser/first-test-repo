import '../Config'
import React from 'react'
import { Provider } from 'react-redux'

import configureNavigation from 'app/Navigation/ConfigureNavigation'
import createStore from 'app/Redux'

export default () => {
  const store = createStore()
  configureNavigation(store, Provider)
}
