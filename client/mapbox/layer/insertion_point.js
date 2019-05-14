export const setup_insertion_point = (map, lng, lat) => {
  var geojson = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
        }
    }]
  };
  map.addSource('point', {
  "type": "geojson",
  "data": geojson
  });

  map.addLayer({
  "id": "point",
  "type": "circle",
  "source": "point",
  "paint": {
    "circle-radius": 8,
    "circle-color": "#ED0D62"
    }
  });
}


