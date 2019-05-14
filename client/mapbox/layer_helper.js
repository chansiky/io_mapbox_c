export const layer_adder = (map, layer) => {
  map.on('styledata', function() {
    map.addLayer(layer);
  });
}

export const set_layer_visibility = (map) => (layer_id) => (visible) => {
  const visibility_string = visible ? 'visible' : 'none';
  console.log("setting_visibility", {map, layer_id, visibility_string});
  map.setLayoutProperty(layer_id, 'visibility', visibility_string);
}
