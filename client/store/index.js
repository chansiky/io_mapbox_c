import {createStore, combineReducers} from 'redux'
import mapbox from './mapbox'

const reducer = combineReducers({
  mapbox
})

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export * from './mapbox'
