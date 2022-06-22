import * as type from '../actions/types';

const initialState = {
  error: null,
  authData: null,
  account: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case type.auth:
      return { ...state, error: null, authData: action.payload.data };
    case type.myAccount:
      return { ...state, error: null, account: action.payload };
    default:
      return state;
  }
};
