import {createStore, combineReducers} from 'redux'
import counter from './counter'

const reducer = combineReducers({
  counter,
})

export default createStore(reducer)

export * from './counter'
