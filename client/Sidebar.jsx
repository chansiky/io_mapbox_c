import React from 'react';
import style from './less/utility.less';
import { connect } from 'react-redux';
import {set_layer_visibility, set_layers_visibility} from './mapbox/layer_helper';
import {get_symbol_layers} from './mapbox/layer/labels';
import {ID_3D_BUILDINGS, ID_WATER, ID_SATELLITE} from './mapbox/layer';

import {
  toggle_labels,
  toggle_satellite,
  toggle_water,
  toggle_3d_buildings,
} from './store';

const button_style = `${style.no_focus_outline} ${style.border_radius_8px} ${style.background_color_light_gray_hover} ${style.border_0} ${style.width_150px} ${style.margin_2px}`;

const Sidebar = (props) => {
  console.log({ID_3D_BUILDINGS, ID_WATER, ID_SATELLITE})
  return (
    <section className={`${style.width_200px} ${style.flex_column} ${style.background_color_b} ${style.padding_4px}`}>
      <h2 className={`${style.margin_0} ${style.margin_bottom_5px}`}> Controls: </h2>
      <button className={`${button_style}`} onClick={() => props.toggle_labels(props.labels_on, props.mapElem)}>
        labels: {props.labels_on ? "on" : "off"}
      </button>
      <button className={`${button_style}`} onClick={() => props.toggle_water(props.water_on, props.mapElem, ID_WATER)}>
        green_water: {props.water_on ? "on" : "off"}
      </button>
      <button className={`${button_style}`} onClick={() => props.toggle_satellite(props.satellite_on, props.mapElem, ID_SATELLITE)}>
         sattelite: {props.satellite_on ? "on" : "off"}
      </button>
      <button className={`${button_style}`} onClick={() => props.toggle_3d_buildings(props.buildings_3d_on, props.mapElem, ID_3D_BUILDINGS)}>
         3D-buildings: {props.buildings_3d_on ? "on" : "off"}
      </button>
      <div className={style.margin_5px}>
        <div>
          insertion point:
        </div>
        <div>
          lng: {props.lng}
        </div>
        <div>
          lat: {props.lat}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    labels_on: state.mapbox.labels,
    satellite_on: state.mapbox.satellite,
    water_on: state.mapbox.water,
    buildings_3d_on: state.mapbox.buildings_3d,
    lng: state.mapbox.pt_lng,
    lat: state.mapbox.pt_lat
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    toggle_labels: (bool, map) => {
      dispatch(toggle_labels(bool));
      const symbol_layers = get_symbol_layers(map);
      set_layers_visibility(map)(symbol_layers)(!bool);
    },
    toggle_satellite: (bool, map, layer) => {
      dispatch(toggle_satellite(bool));
      set_layer_visibility(map)(layer)(!bool);
    },
    toggle_water: (bool, map, layer) => {
      dispatch(toggle_water(bool));
      set_layer_visibility(map)(layer)(!bool);
    },
    toggle_3d_buildings: (bool, map, layer) => {
      dispatch(toggle_3d_buildings(bool));
      set_layer_visibility(map)(layer)(!bool);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
