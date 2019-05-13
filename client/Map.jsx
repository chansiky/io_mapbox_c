import React, {useEffect, useState, useCallback} from 'react';
import {map_maker, label_changer} from './mapbox';
import {building_layer} from './mapbox/layer/building';
import {gltf_layer} from './mapbox/layer/gltf';
import {obj_layer} from './mapbox/layer/obj';
import {webgl_layer} from './mapbox/layer/webgl';
import {satellite_layer} from './mapbox/layer/satellite';
import {layer_adder} from './mapbox/layer_adder';
import style from './less/utility.less';
import { connect } from 'react-redux';
import store from './store';

const Map = (props) => {
  const MAP_ELEM_ID = "map_elem";
  const [map, setMap] = useState(false);

  useEffect(() => {
    if (map == false) {
      setMap(map_maker(MAP_ELEM_ID))
    }
    if (Object.entries(map).length !== 0 && map.constructor !== Object) {
      console.log("createing water layer", {map});
      satellite_layer(map);
    }
  });

  return (
    <>
      <div id={MAP_ELEM_ID} className={`${style.no_child_focus_outline} ${style.flex_grow_1} ${style.border_radius_8px}`} ></div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    labels_on: state.mapbox.labels,
    satellite_on: state.mapbox.satellite,
  }
}

export default connect(mapStateToProps)(Map);
