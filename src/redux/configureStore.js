import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import rootReducer from './reducers'
import { browserHistory } from 'react-router';
import { routerMiddleware ,routerReducer } from 'react-router-redux';
import ReduxPromise from 'redux-promise';

const reducer = combineReducers({
  user: rootReducer,
  routing: routerReducer
})

export default function configureStore(initialState={}) {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(routerMiddleware(browserHistory), ReduxPromise),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  )
}
