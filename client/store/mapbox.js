import {toggle_creator} from './helper';
import {empty_lot_1} from '../helper/chicago_locations'

const initial_state = {
  labels: false,
  satellite: false,
  buildings_3d: true,
  water: false,
  pt_lng: empty_lot_1.lng,
  pt_lat: empty_lot_1.lat
}

// action type
const TOGGLE_LABELS = 'TOGGLE_LABELS';
const TOGGLE_WATER = 'TOGGLE_WATER';
const TOGGLE_SATELLITE = 'TOGGLE_SATELLITE';
const TOGGLE_3D_BUILDINGS = 'TOGGLE_3D_BUILDINGS';
const UPDATE_PT_LNG_LAT = 'UPDATE_PT_LNG_LAT';

// action creator
export const toggle_satellite    = toggle_creator(TOGGLE_SATELLITE)
export const toggle_labels       = toggle_creator(TOGGLE_LABELS)
export const toggle_water        = toggle_creator(TOGGLE_WATER)
export const toggle_3d_buildings = toggle_creator(TOGGLE_3D_BUILDINGS)
export const update_pt_lng_lat   = (lng, lat) => {
  return {
    type: UPDATE_PT_LNG_LAT,
    lng: lng,
    lat: lat
  }
}

const mapbox_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case TOGGLE_LABELS:
      return {...state, labels: action.value}
    case TOGGLE_SATELLITE:
      return {...state, satellite: action.value}
    case TOGGLE_3D_BUILDINGS:
      return {...state, buildings_3d: action.value}
    case TOGGLE_WATER:
      return {...state, water: action.value}
    case UPDATE_PT_LNG_LAT:
      return {...state, pt_lng: action.lng, pt_lat: action.lat}
    default:
      return state
  }
}

export default mapbox_reducer
