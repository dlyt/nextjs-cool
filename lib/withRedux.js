import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import nextReduxWrapper from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './rootReducer'

export function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
  return store
}

export default function (BaseComponent) {
  return nextReduxWrapper(configureStore)(BaseComponent)
}
