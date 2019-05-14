import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
import MapApp from "./MapApp";

const Index = () => {
  return (
    <Provider store={store}>
      <MapApp/>
    </Provider>
  )
};

const render_react = () => {
  ReactDOM.render(<Index />, document.getElementById("react"));
}

export default render_react
