import {ID_SATELLITE} from './index'
export const satellite_layer = (map) => {
  const layer_id = ID_SATELLITE;
  map.addSource("mapbox-satellite", {
    "type": "raster",
    "url": "mapbox://mapbox.satellite",
    "tileSize": 256
  });

  map.addLayer(
    {
      "id": layer_id,
      "source": "mapbox-satellite",
      "type": "raster",
      "layout": {
        "visibility": "none",
      },
    }, "building"
  );
  return layer_id
}
