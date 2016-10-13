import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Text from './components/Text'
import reducer from './reducers/reducers'

let store = createStore(reducer)

render(
  <Provider store={store}>
    <Text />
  </Provider>,
  document.getElementById('root')
)