export const mark_mouse_coords = (map, callback) => {
  map.on('mousedown', 'point', function(e) {
    // Prevent the default map drag behavior.
    e.preventDefault();

    const lngLat = e.lngLat;

    const onMove = (e) => {
      var coords = e.lngLat;
      callback(map, coords.lng, coords.lat);
    }

    const onUp = (e) => {
      // Unbind mouse/touch events
      map.off('mousemove', onMove);
    }

    map.on('mousemove', onMove);
    map.once('mouseup', onUp);
  });
}

 
