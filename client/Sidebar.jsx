import React, {useState} from 'react';
import style from './less/utility.less';
import { connect } from 'react-redux';
import { layer_adder, set_layer_visibility, set_layers_visibility} from './mapbox/layer_helper';
import {get_symbol_layers} from './mapbox/layer/labels';
import {
  ID_3D_BUILDINGS,
  ID_WATER,
  ID_SATELLITE,
  ID_OBJ_IMPORT
} from './mapbox/layer';
import {import_obj_layer} from './mapbox/layer/obj';
import {set_light} from './mapbox/light';

import {
  toggle_labels,
  toggle_satellite,
  toggle_water,
  toggle_3d_buildings,
  toggle_obj_show,
  update_light_azimuth
} from './store';

const button_style = `${style.no_focus_outline} ${style.border_radius_8px} ${style.background_color_light_gray_hover} ${style.border_0} ${style.width_150px} ${style.margin_2px}`;

const Sidebar = (props) => {
  const [obj_imported, setObjImported] = useState(false);
  const [light_a, setLightA] = useState(50);

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
      <div>
        <h4>light: </h4>
        <span>azimuth:{props.light_a}</span>
        <input
          type="range"
          min="1"
          max="360"
          value={props.light_a}
          className={style.width_150px}
          id="myRange"
          onChange={(e) => {
            const new_value = Number(e.target.value)
            props.update_light_values(props.mapElem, props.light_i, props.light_r, new_value, props.light_p)
          }}
        />
      </div>
      <div>
        <h4>obj import: </h4>
        <button className={`${button_style}`} disabled={obj_imported} onClick={() => {
          import_obj(props.mapElem, props.lng, props.lat);
          setObjImported(true);
        }}>
           import OBJ model
        </button>
        {
          obj_imported &&
          <button className={`${button_style}`} onClick={() => props.toggle_obj_show(props.obj_show_on, props.mapElem, ID_OBJ_IMPORT)}>
             show obj: {props.obj_show_on ? "on" : "off"}
          </button>
        }
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
      </div>
    </section>
  )
}

const import_obj = (map, lng, lat) => {
  const layers = map.getStyle().layers;
  const first_symbol_layer = layers.find((elem) => elem.type === 'symbol');
  const import_layer = import_obj_layer(lng, lat)
  map.addLayer(import_layer, first_symbol_layer.id);
}

const mapStateToProps = (state, ownProps) => {
  return {
    labels_on: state.mapbox.labels,
    satellite_on: state.mapbox.satellite,
    water_on: state.mapbox.water,
    buildings_3d_on: state.mapbox.buildings_3d,
    obj_show_on: state.mapbox.obj_show,
    lng: state.mapbox.pt_lng,
    lat: state.mapbox.pt_lat,
    light_r: state.mapbox.light_r,
    light_a: state.mapbox.light_a,
    light_p: state.mapbox.light_p,
    light_i: state.mapbox.light_intensity
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
    },
    toggle_obj_show: (bool, map, layer) => {
      dispatch(toggle_obj_show(bool));
      set_layer_visibility(map)(layer)(!bool);
    },
    update_light_values: (map, light_i, light_r, light_a, light_p) => {
      dispatch(update_light_azimuth(light_a));

      let light_values = {
        intensity: light_i,
        position: [
          light_r,
          light_a,
          light_p
        ]
      }
      map.setLight(light_values);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
