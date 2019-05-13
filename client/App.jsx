import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
import style from './less/utility.less';

import Sidebar from "./Sidebar";
import Map from "./Map";


const Index = () => {
  return (
    <Provider store={store}>
      <div className={`${style.flex_row} ${style.flex_items_stretch} ${style.max_view_width_height}`}>
        <Sidebar className={style.fixed}/>
        <Map className={style.background_color_b} />
      </div>
    </Provider>
  )
};

const render_react = () => {
  ReactDOM.render(<Index />, document.getElementById("react"));
}

export default render_react
