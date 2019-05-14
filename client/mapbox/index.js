import {empty_lot_1} from '../helper/chicago_locations';
import {mapbox_styles} from './styles';
import {get_symbol_layers} from './layer/labels';
import {set_layers_visibility} from './layer_helper';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbnNpa3kiLCJhIjoiY2pnbzQzbDRlMDAxazJxcGNvYW1xMG5jYyJ9.p8CbyuMR-3az3nroK1Jx-w';

export const map_maker = (container_id) => {
  const map = new mapboxgl.Map({
    container: container_id,
    style: mapbox_styles.light,
    center: [empty_lot_1.lng, empty_lot_1.lat],
    zoom: 16.5,
    pitch: 40,
  });

  map.on("load", () => {
    const symbol_layers = get_symbol_layers(map);
    set_layers_visibility(map)(symbol_layers)(false);
  })
  return map;
}

