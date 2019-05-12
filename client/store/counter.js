import {createStore} from 'redux';

const initial_state = {
  count: 4,
}

// action type
const INCREMENT = 'INCREMENT';

// action creator
export const increment = () => {
  return ({
    type: INCREMENT
  })
}

const counter_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('testing two');
      const add_one = state.count + 1
      return {...state, count: add_one}
    case 'DECREMENT':
      const sub_one = state.count - 1
      return {...state, count: sub_one}
    default:
      return state
  }
}

export default counter_reducer
