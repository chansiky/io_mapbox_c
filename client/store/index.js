import {createStore, combineReducers} from 'redux'
import counter from './counter'
import mapbox from './mapbox'

const reducer = combineReducers({
  counter,
  mapbox
})

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export * from './counter'
export * from './mapbox'
