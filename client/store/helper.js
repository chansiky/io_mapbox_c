export const toggle_creator = (action_type) => {
  return (bool) => {
    const new_value = bool ? false : true;
    return ({
      type: action_type,
      value: new_value
    })
  }
}
