import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Don't manipulate the state by changing the current array like this: state.push(action.payload.data)
      // Instead, we can use concat to creat a new array
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
      break;
  }
  return state;
}
