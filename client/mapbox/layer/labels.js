export const get_symbol_layers = (map) => {
  const layers = map.getStyle().layers;
  const symbol_layers = layers.filter((elem) => elem.type === 'symbol');
  return symbol_layers;
}
