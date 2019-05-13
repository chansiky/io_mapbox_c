import {empty_square} from '../helper/chicago_locations';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbnNpa3kiLCJhIjoiY2pnbzQzbDRlMDAxazJxcGNvYW1xMG5jYyJ9.p8CbyuMR-3az3nroK1Jx-w';

export const map_maker = (container_id) => {
  const map = new mapboxgl.Map({
  container: container_id,
  style: 'mapbox://styles/mapbox/light-v10',

  center: [empty_square.lng, empty_square.lat],
  zoom: 15.5,
  pitch: 45,
  bearing: -17.6,
  });
  return map;
}
