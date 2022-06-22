import * as types from '../actions/types';
const initialState = {
  investments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.loading:
      return true;
    case types.investments:
      return { ...state, investments: action.payload };

    default:
      return state;
  }
};
