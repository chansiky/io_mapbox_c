import {empty_lot_2} from '../../helper/chicago_locations';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// parameters to ensure the model is georeferenced correctly on the map
var modelOrigin = [empty_lot_2.lng, empty_lot_2.lat];
var modelAltitude = 0;
var modelRotate = [Math.PI / 2, 0, 0];
var modelScale = 5.41843220338983e-7;
var modelTransform = {
  translateX: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).x,
  translateY: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).y,
  translateZ: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).z,
  rotateX: modelRotate[0],
  rotateY: modelRotate[1],
  rotateZ: modelRotate[2],
  scale: modelScale
};
// configuration of the custom layer for a 3D model per the CustomLayerInterfac

export const gltf_layer = {
  id: '3d-model',
  type: 'custom',
  renderingMode: '3d',
  onAdd: function(map, gl) {
    const THREE = window.THREE;
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // create two three.js lights to illuminate the model
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.scene.add(directionalLight);

    var directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.scene.add(directionalLight2);

    // use the three.js GLTF loader to add the 3D model to the three.js scene
    //this.GLTFLoader = new THREE.GLTFLoader().setPath('./');
    this.GLTFLoader = new THREE.GLTFLoader();
    this.GLTFLoader.setPath('/models/damaged_helmet-gltf/');
    console.log('loading gltf');

    //this.GLTFLoader.load('https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf', (function (gltf) {

    this.GLTFLoader.load('DamagedHelmet.gltf', (gltf) => {
      console.log('adding gltf to scene');
      console.log({gltf});
      this.scene.add(gltf.scene);
    },
    // called when loading is in progresses
    function ( xhr ) {
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when loading has errors
    function ( error ) {
      console.log( 'An error happened while loading gltf file, error was:', error );
    }
    )
    this.map = map;

    // use the Mapbox GL JS map canvas for three.js
    this.renderer = new THREE.WebGLRenderer({
    canvas: map.getCanvas(),
    context: gl
    });

    this.renderer.autoClear = false;
  },
  render: function(gl, matrix) {
    const THREE = window.THREE;
    var rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
    var rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
    var rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);

    var m = new THREE.Matrix4().fromArray(matrix);
    var l = new THREE.Matrix4().makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ)
      .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
      .multiply(rotationX)
      .multiply(rotationY)
      .multiply(rotationZ);

    this.camera.projectionMatrix.elements = matrix;
    this.camera.projectionMatrix = m.multiply(l);
    this.renderer.state.reset();
    this.renderer.render(this.scene, this.camera);
    this.map.triggerRepaint();
  }
};

