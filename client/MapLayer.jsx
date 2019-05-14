import React, {useState, useEffect} from 'react';
import {map_maker} from './mapbox';
import {water_layer} from './mapbox/layer/water';
import {satellite_layer} from './mapbox/layer/satellite';
import {set_layer_visibility} from './mapbox/layer_helper';
import {connect} from 'react-redux';

const MapLayer = ({mapElem}) => {
  console.log({mapElem})
  useEffect(() => {
    if(mapElem != false){
      mapElem.on("load", () => {
        const water_id = water_layer(mapElem);
        const satellite_id = satellite_layer(mapElem);
      })
    }
  })

  return (
    <span>
    </span>
  )
}

export default MapLayer
