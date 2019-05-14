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
        <div id={MAP_ELEM_ID}  className={`${style.no_child_focus_outline} ${style.flex_grow_1} ${style.border_radius_8px}`} >
          <MapLayer mapElem={map}/>
        </div>
      </div>
    </>
  )
}

export default MapApp
