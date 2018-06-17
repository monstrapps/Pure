import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ExampleReducer from './ExampleReducer'

const reducer = combineReducers({
  example: ExampleReducer,
  routing: routerReducer,
})

export default reducer;
