import React from 'react';
import style_utility from './less/utility.less';
import { connect } from 'react-redux';
import {
  increment,
  } from './store';

const Sidebar = (props) => {
  return (
    <>
      <section className={style_utility.background_color_a_hover}>
        <h2> Sidebar </h2>
        <button onClick={() => props.inc_count()}>
          count: {props.store_count}
        </button>
      </section>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    store_count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    inc_count: () => {
      dispatch(increment());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
