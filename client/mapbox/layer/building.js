import {ID_3D_BUILDINGS} from './index'

export const building_layer = (map) => {
  const layer_id = ID_3D_BUILDINGS;

  const layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer({
    'id': layer_id,
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'layout': {
      "visibility": "visible",
    },
    'paint': {
      'fill-extrusion-color': '#EFEADF',
      'fill-extrusion-height': [
          "interpolate",
          ["linear"],
          ["zoom"],
          15, 0,
          15.05,
          ["get", "height"]
        ],
        'fill-extrusion-base': [
          "interpolate",
          ["linear"],
          ["zoom"],
          15, 0,
          15.05,
          ["get", "min_height"]
      ],
      'fill-extrusion-opacity': .8,
      }
  }, labelLayerId);

  return layer_id
}
