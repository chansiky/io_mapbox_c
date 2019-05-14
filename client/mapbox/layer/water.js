export const water_layer = (map) => {
  const layer_id = "water_a";
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
        "visibility": "visible",
      },
      "paint": {
        "fill-color": "#ECC8D4"
      }
    }, "building"
  );
  return layer_id
}
