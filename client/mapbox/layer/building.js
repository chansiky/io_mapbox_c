import {ID_3D_BUILDINGS} from './index'
// modified code from mapbox's example: 
// https://docs.mapbox.com/mapbox-gl-js/example/3d-buildings/
export const building_layer = (map) => {
  const layer_id = ID_3D_BUILDINGS;

  // Insert the layer beneath any symbol layer.
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
      'fill-extrusion-color': '#aaa',
      // use an 'interpolate' expression to add a smooth transition effect to the
      // buildings as the user zooms in
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
      'fill-extrusion-opacity': .6,
      }
  }, labelLayerId);

  return layer_id
}
