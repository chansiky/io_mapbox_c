import React, {useState, useEffect} from 'react';
import {map_maker} from './mapbox';
import {water_layer} from './mapbox/layer/water';
import {satellite_layer} from './mapbox/layer/satellite';
import {building_layer} from './mapbox/layer/building';
import {setup_insertion_point} from './mapbox/layer/insertion_point';
import {mark_mouse_coords} from './mapbox/mouse_events';
import {set_layer_visibility} from './mapbox/layer_helper';
import {
  update_pt_lng_lat,
} from './store';

import {connect} from 'react-redux';

const MapLayer = ({mapElem, update_lng_lat, lng, lat}) => {
  console.log({mapElem})
  useEffect(() => {
    if(mapElem != false){
      mapElem.on("load", () => {
        const building_id = building_layer(mapElem);
        const water_id = water_layer(mapElem);
        const satellite_id = satellite_layer(mapElem);
        setup_insertion_point(mapElem, lng, lat);

        mark_mouse_coords(mapElem, update_lng_lat);


      })
    }
  })

  return (
    <span>
    </span>
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
    update_lng_lat: (lng, lat) => {
      dispatch(update_pt_lng_lat(lng,lat));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapLayer)
