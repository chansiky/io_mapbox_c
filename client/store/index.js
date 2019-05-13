import {createStore, combineReducers} from 'redux'
import counter from './counter'
import mapbox from './mapbox'

const reducer = combineReducers({
  counter,
  mapbox
})

export default createStore(reducer)

export * from './counter'
export * from './mapbox'
