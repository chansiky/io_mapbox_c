import React, {useEffect, useState} from 'react';
import {map_maker} from './mapbox';
import style from './less/utility.less';
import MapLayer from './MapLayer';
import Sidebar from './Sidebar';

const MapApp = () => {
  const MAP_ELEM_ID = "map_elem";

  const [map, setMap] = useState(false);

  useEffect(() => {
    if (map == false) {
      setMap(map_maker(MAP_ELEM_ID))
    }
  });

  return (
    <>
      <div className={`${style.flex_row} ${style.max_view_width_height}`}>
        <Sidebar mapElem={map}/>
        <MapLayer mapElemID={MAP_ELEM_ID} mapElem={map}/>
      </div>
    </>
  )
}

export default MapApp
