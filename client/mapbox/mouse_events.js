export const mark_mouse_coords = (map, callback) => {
  map.on('mousedown', 'point', function(e) {
    // Prevent the default map drag behavior.
    e.preventDefault();

    const lngLat = e.lngLat;
    console.log(lngLat.lng, lngLat.lat);
    callback(lngLat.lng, lngLat.lat);
  });
}
