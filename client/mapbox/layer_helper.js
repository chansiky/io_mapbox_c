export const layer_adder = (map, layer) => {
  map.on('styledata', function() {
    map.addLayer(layer);
  });
}

export const set_layer_visibility = (map) => (layer_id) => (visible) => {
  const visibility_string = visible ? 'visible' : 'none';
  map.setLayoutProperty(layer_id, 'visibility', visibility_string);
}

export const set_layers_visibility = (map) => (layers) => (visible) => {
  const visibility_string = visible ? 'visible' : 'none';
  layers.forEach( (elem) =>
    map.setLayoutProperty(elem.id, 'visibility', visibility_string)
  )
}
