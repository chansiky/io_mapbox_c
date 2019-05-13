import {toggle_creator} from './helper';

const initial_state = {
  labels: false,
  satellite: false
}

// action type
const TOGGLE_LABELS = 'TOGGLE_LABELS';
const TOGGLE_SATELLITE = 'TOGGLE_SATELLITE';

// action creator
export const toggle_satellite = toggle_creator(TOGGLE_SATELLITE)
export const toggle_labels    = toggle_creator(TOGGLE_LABELS)


const mapbox_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case TOGGLE_LABELS:
      return {...state, labels: action.value}
    case TOGGLE_SATELLITE:
      return {...state, satellite: action.value}
    default:
      return state
  }
}

export default mapbox_reducer
