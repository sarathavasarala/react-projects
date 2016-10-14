import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import commentReducer from './reducers/commentReducer'
import RootComponent from './components/RootComponent'

// Create a store with commentReducer
let store = createStore(commentReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  document.getElementById('root')
)
