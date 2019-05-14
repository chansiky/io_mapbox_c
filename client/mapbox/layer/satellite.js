export const satellite_layer = (map) => {
  const layer_id = "satellite";
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
        "visibility": "visible",
      },
    }, "building"
  );
  return layer_id
}
