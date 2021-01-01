import * as actions from './types';

const initialState = 0

export default function isloading(state = initialState, action ){
  switch (action.type) {
    case actions.BEGIN_AJAX_CALL:
      return state + 1;
    case actions.END_AJAX_CALL:
      return state - 1;
    default:
      return state;
  }
};
