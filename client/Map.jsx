import React, {useEffect} from 'react';
import {map_maker} from './mapbox';
import {building_layer} from './mapbox/layer/building';
import {gltf_layer} from './mapbox/layer/gltf';
import {webgl_layer} from './mapbox/layer/webgl';
import {layer_adder} from './mapbox/layer_adder';

const Map = (prop) => {
  const MAP_ELEM_ID = "map_elem";
  useEffect(() => {
    const map = map_maker(MAP_ELEM_ID);
    building_layer(map);
    layer_adder(map, gltf_layer);
    layer_adder(map, webgl_layer);
  });

  return (
    <>
      <div>
        <div> Map: </div>
        <div id={MAP_ELEM_ID} ></div>
      </div>
    </>
  )
}

export default Map;
