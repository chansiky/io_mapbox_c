export const satellite_layer = (map) => {
  /*
  var layers = map.getStyle().layers;
  var before_layer;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      before_layer = layers[i].id;
      break;
    }
  }
*/

  map.on('load', function() {

    map.addSource('mapbox-streets', {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-streets-v8"
    });

    map.addLayer(
      {
        "id": "water",
        "source": "mapbox-streets",
        "source-layer": "water",
        "type": "fill",
        "layout": {
          //"visibility": "none",
          "visibility": "visible",
        },
        "paint": {
          "fill-color": "#ECC8D4"
        }
      }, "building"
    );
  })
}

/*
          "mapbox-satellite": {
              "type": "raster",
              "url": "mapbox://mapbox.satellite",
              "tileSize": 256
          }
*/
