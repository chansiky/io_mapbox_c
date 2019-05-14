import {ID_TRIGGER} from './index'

export const trigger_layer = (map) => {
   map.addSource(ID_TRIGGER, {
     "type": "geojson",
     "data": { }
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
