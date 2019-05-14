export const light_values = {
  anchor: "map",
  color: "white",
  intensity: 0.4,
  position: [
    1.5, //radians
    90,  //azimuth
    80   //polar
  ]
}

export const set_light = (map, intensity, radian, azimuth, polar) => {
  mapElem.setLight({
    intensity: intensity,
    position: [radian, azimuth, polar]
  });
}
