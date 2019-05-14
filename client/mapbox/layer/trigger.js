import {ID_TRIGGER} from './index'

const geojson = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [0, 0]
      }
  }]
};

export const trigger_layer = (map) => {
   map.addSource(ID_TRIGGER, {
     "type": "geojson",
     "data": geojson
   });
   map.addLayer({
     "id": ID_TRIGGER,
     "type": "circle",
     "source": ID_TRIGGER,
     "layout": {
       "visibility": "none",
     },
   })
 }

export const trigger_change = (map) => {
  map.setLayoutProperty(ID_TRIGGER, 'visibility', "visible");
  map.setLayoutProperty(ID_TRIGGER, 'visibility', "none");
}
