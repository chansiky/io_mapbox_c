import React from 'react';
import style_utility from './less/utility.less';
import { connect } from 'react-redux';
import {
  increment,
  toggle_labels,
  toggle_satellite
  } from './store';

const Sidebar = (props) => {
  return (
    <>
      <section className={style_utility.background_color_a_hover}>
        <h2> Sidebar </h2>
        <button onClick={() => props.inc_count()}>
          count: {props.store_count}
        </button>
        <button onClick={() => props.toggle_labels(props.labels_on)}>
          labels: {props.labels_on ? "on" : "off"}
        </button>
        <button onClick={() => props.toggle_satellite(props.satellite_on)}>
           sattelite: {props.satellite_on ? "on" : "off"}
        </button>
      </section>
    </>
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
