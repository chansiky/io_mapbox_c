import {ID_WATER, ID_SATELLITE} from './index'
export const water_layer = (map) => {
  const layer_id = ID_WATER;
  map.addSource('mapbox-streets', {
    "type": "vector",
    "url": "mapbox://mapbox.mapbox-streets-v8"
  });

  map.addLayer(
    {
      "id": layer_id,
      "source": "mapbox-streets",
      "source-layer": "water",
      "type": "fill",
      "layout": {
        "visibility": "none",
      },
      "paint": {
        "fill-color": "#0DEDC4"
      }
    }, "building"
  );
  return layer_id
}
