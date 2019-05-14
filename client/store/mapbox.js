import {toggle_creator} from './helper';

const initial_state = {
  labels: true,
  satellite: true,
  water: true
}

// action type
const TOGGLE_LABELS = 'TOGGLE_LABELS';
const TOGGLE_WATER = 'TOGGLE_WATER';
const TOGGLE_SATELLITE = 'TOGGLE_SATELLITE';
const TOGGLE_LAYER = 'TOGGLE_LAYER';

// action creator
export const toggle_satellite = toggle_creator(TOGGLE_SATELLITE)
export const toggle_labels    = toggle_creator(TOGGLE_LABELS)
export const toggle_water    = toggle_creator(TOGGLE_WATER)
export const toggle_layer_action_creator = (callback, value) => {
  return ({
    type: TOGGLE_LAYER,
    callback,
    value
  })
}


const mapbox_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case TOGGLE_LAYER:
      action.callback(action.value);
      return state
    case TOGGLE_LABELS:
      return {...state, labels: action.value}
    case TOGGLE_SATELLITE:
      return {...state, satellite: action.value}
    case TOGGLE_WATER:
      return {...state, water: action.value}
    default:
      return state
  }
}

export default mapbox_reducer
