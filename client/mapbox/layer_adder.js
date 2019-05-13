export const layer_adder = (map, layer) => {
  map.on('styledata', function() {
    map.addLayer(layer);
  });
}
