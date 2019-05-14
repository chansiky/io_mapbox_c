import {empty_lot_1} from '../helper/chicago_locations';
import {mapbox_styles} from './styles';
import {get_symbol_layers} from './layer/labels';
import {set_layers_visibility} from './layer_helper';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbnNpa3kiLCJhIjoiY2pnbzQzbDRlMDAxazJxcGNvYW1xMG5jYyJ9.p8CbyuMR-3az3nroK1Jx-w';

const emtpy_layer = {
  "id": "background-fill",
  "type": "fill",
  "paint": {
    "fill-color": "#5bc266"
  }
}

const base_style = {
    "version": 8,
    "name": "Mapbox Streets",
    "sprite": "mapbox://sprites/mapbox/streets-v8",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf"

    //"layers": [...]
}

export const map_maker = (container_id) => {
  const map = new mapboxgl.Map({
    container: container_id,
    style: mapbox_styles.light,
    center: [empty_lot_1.lng, empty_lot_1.lat],
    zoom: 16.5,
    pitch: 40,
  });

  //initial settings
  map.on("load", () => {
    //turn off labels
    const symbol_layers = get_symbol_layers(map);
    set_layers_visibility(map)(symbol_layers)(false);
  })
  return map;
}

