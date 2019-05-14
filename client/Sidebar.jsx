import React from 'react';
import style from './less/utility.less';
import { connect } from 'react-redux';
import {set_layer_visibility} from './mapbox/layer_helper';

import {
  toggle_labels,
  toggle_satellite,
  toggle_water,
  } from './store';

const button_style = `${style.no_focus_outline} ${style.border_radius_8px} ${style.background_color_light_gray_hover} ${style.border_0} ${style.width_150px} ${style.margin_2px}`;

const Sidebar = (props) => {
  console.log({props})
  return (
    <section className={`${style.width_200px} ${style.flex_column} ${style.background_color_b} ${style.padding_4px}`}>
      <h2 className={style.margin_0}> Sidebar </h2>
      <button className={`${button_style}`} onClick={() => props.toggle_water(props.water_on, props.mapElem, "water_a")}>
        water: {props.water_on ? "on" : "off"}
      </button>
      <button className={`${button_style}`} onClick={() => props.toggle_satellite(props.satellite_on, props.mapElem, "satellite")}>
         sattelite: {props.satellite_on ? "on" : "off"}
      </button>
    </section>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    labels_on: state.mapbox.labels,
    satellite_on: state.mapbox.satellite,
    water_on: state.mapbox.water
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    toggle_labels: (bool, map, layer) => {
      dispatch(toggle_labels(bool));
      set_layer_visibility(map)(layer)(!bool);
    },
    toggle_satellite: (bool, map, layer) => {
      dispatch(toggle_satellite(bool));
      set_layer_visibility(map)(layer)(!bool);
    },
    toggle_water: (bool, map, layer) => {
      dispatch(toggle_water(bool));
      set_layer_visibility(map)(layer)(!bool);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
