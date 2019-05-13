import React, {useEffect} from 'react';
import {map_maker} from './mapbox';
import {building_layer} from './mapbox/layer/building';

const Map = (prop) => {
  const MAP_ELEM_ID = "map_elem";
  useEffect(() => {
    const map = map_maker(MAP_ELEM_ID);
    building_layer(map);
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
