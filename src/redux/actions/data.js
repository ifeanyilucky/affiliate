import * as api from '../api';
import * as types from './types';

export const getInvestments = () => async (dispatch) => {
  await api
    .fetchStaticInvestments()
    .then(({ data }) => {
      dispatch({ type: types.loading });
      dispatch({ type: types.investments, payload: data });
      dispatch({ type: types.stopLoading });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: types.stopLoading });
    });
};
