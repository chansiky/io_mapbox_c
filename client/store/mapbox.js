import {toggle_creator} from './helper';
import {empty_lot_1} from '../helper/chicago_locations'

const initial_state = {
  labels: false,
  satellite: false,
  buildings_3d: true,
  water: false,
  obj_show: true,
  pt_lng: empty_lot_1.lng,
  pt_lat: empty_lot_1.lat,
  light_i: 0.5, //0-1
  light_r: 1.5,
  light_a: 90, //0-360 - 180 is south
  light_p: 40, //0-360 - 180 is directly below
}

// action type
const TOGGLE_LABELS = 'TOGGLE_LABELS';
const TOGGLE_WATER = 'TOGGLE_WATER';
const TOGGLE_SATELLITE = 'TOGGLE_SATELLITE';
const TOGGLE_OBJ_SHOW = 'TOGGLE_OBJ_SHOW';
const TOGGLE_3D_BUILDINGS = 'TOGGLE_3D_BUILDINGS';
const UPDATE_PT_LNG_LAT = 'UPDATE_PT_LNG_LAT';
const UPDATE_LIGHT_VALUES = 'UPDATE_LIGHT_VALUES';

// action creator
export const toggle_satellite    = toggle_creator(TOGGLE_SATELLITE)
export const toggle_labels       = toggle_creator(TOGGLE_LABELS)
export const toggle_water        = toggle_creator(TOGGLE_WATER)
export const toggle_3d_buildings = toggle_creator(TOGGLE_3D_BUILDINGS)
export const toggle_obj_show     = toggle_creator(TOGGLE_OBJ_SHOW)
export const update_pt_lng_lat   = (lng, lat) => {
  return {
    type: UPDATE_PT_LNG_LAT,
    lng: lng,
    lat: lat
  }
}
export const update_light_values   = (int, rad, az, pol) => {
  return {
    type: UPDATE_LIGHT_VALUES,
    int,
    rad,
    az,
    pol
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
    case TOGGLE_OBJ_SHOW:
      return {...state, obj_show: action.value}
    case UPDATE_PT_LNG_LAT:
      return {...state, pt_lng: action.lng, pt_lat: action.lat}
    case UPDATE_LIGHT_VALUES:
      return {...state, 
        light_i: action.int, 
        light_r: action.rad, 
        light_a: action.az, 
        light_p: action.pol
      }
    default:
      return state
  }
}

export default mapbox_reducer
