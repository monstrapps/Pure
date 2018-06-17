import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootReducer from './Reducers/RootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware)
)

export default store;