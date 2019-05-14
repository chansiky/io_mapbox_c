import React, {useState, useEffect} from 'react';
import {map_maker} from './mapbox';
import {water_layer} from './mapbox/layer/water';
import {satellite_layer} from './mapbox/layer/satellite';
import {building_layer} from './mapbox/layer/building';
import {trigger_layer} from './mapbox/layer/trigger';
import {import_obj_layer} from './mapbox/layer/obj';
import {setup_insertion_point} from './mapbox/layer/insertion_point';
import {mark_mouse_coords} from './mapbox/mouse_events';
import {layer_adder, set_layer_visibility} from './mapbox/layer_helper';
import {
  update_pt_lng_lat,
} from './store';
import {connect} from 'react-redux';
import style from './less/utility.less';
import {light_values} from './mapbox/light';

const MapLayer = ({mapElemID, mapElem, update_lng_lat, lng, lat}) => {
  useEffect(() => {
    if(mapElem != false){
      mapElem.on("load", () => {
        //trigger_layer is used to trigger a 'styledata' event since setting light doesn't trigger it
        trigger_layer(mapElem);

        const building_id = building_layer(mapElem);
        const satellite_id = satellite_layer(mapElem);
        const water_id = water_layer(mapElem);
        setup_insertion_point(mapElem, lng, lat);

        mark_mouse_coords(mapElem, update_lng_lat);

        mapElem.setLight(light_values);
      })
    }
  })

  return (
    <div id={mapElemID} className={`${style.no_child_focus_outline} ${style.flex_grow_1} ${style.border_radius_8px}`} >
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    lng: state.mapbox.pt_lng,
    lat: state.mapbox.pt_lat,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    update_lng_lat: (map, lng, lat) => {
      dispatch(update_pt_lng_lat(lng,lat));
      const geojson = {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "geometry": {
          "type": "Point",
          "coordinates": [lng, lat]
          }
        }]
      };
      map.getSource('point').setData(geojson);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapLayer)
