import React from 'react';
import style from './less/utility.less';
import { connect } from 'react-redux';
import {
  increment,
  toggle_labels,
  toggle_satellite
  } from './store';
import {print_location} from './helper/curr_directory_test';

const button_style = `${style.no_focus_outline} ${style.border_radius_8px} ${style.background_color_light_gray_hover} ${style.border_0} ${style.width_150px} ${style.margin_2px}`;

const Sidebar = (props) => {
  print_location();
  return (
    <section className={`${style.width_200px} ${style.flex_column} ${style.background_color_b} ${style.padding_4px}`}>
      <h2 className={style.margin_0}> Sidebar </h2>
      <button className={`${button_style}`} onClick={() => props.inc_count()}>
        count: {props.store_count}
      </button>
      <button className={`${button_style}`} onClick={() => props.toggle_labels(props.labels_on)}>
        labels: {props.labels_on ? "on" : "off"}
      </button>
      <button className={`${button_style}`} onClick={() => props.toggle_satellite(props.satellite_on)}>
         sattelite: {props.satellite_on ? "on" : "off"}
      </button>
    </section>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    store_count: state.counter.count,
    labels_on: state.mapbox.labels,
    satellite_on: state.mapbox.satellite
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    inc_count: () => {
      dispatch(increment());
    },
    toggle_labels: (bool) => {
      dispatch(toggle_labels(bool));
    },
    toggle_satellite: (bool) => {
      dispatch(toggle_satellite(bool));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
