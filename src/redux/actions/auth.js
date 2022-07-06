import * as api from '../api';
import * as type from './types';
import { PATH } from '../../routes/paths';

export const signin =
  (values, setSubmitting, navigate, toast) => async (dispatch) => {
    await api
      .signin(values)
      .then(({ data }) => {
        dispatch({ type: type.auth, payload: data });
        localStorage.setItem('partner', JSON.stringify(data.token));
        toast({
          status: 'success',
          duration: 1000,
          title: 'Login success',
          position: 'top-right',
          variant: 'top-accent',
          onCloseComplete: () => {
            navigate(PATH.dashboard);
          },
        });
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: type.stopLoading });
        toast({
          status: 'error',
          title: 'Failure',
          description: err?.response?.data?.msg,
          position: 'top-right',
          variant: 'top-accent',
        });

        setSubmitting(false);
      });
  };

export const signup =
  (values, toast, navigate, setSubmitting) => async (dispatch) => {
    await api
      .register(values)
      .then(({ data }) => {
        dispatch({ type: type.auth, payload: data });

        localStorage.setItem('partner', JSON.stringify(data.token));
        toast({
          status: 'success',
          title: 'Signup success',
          position: 'top-right',
          variant: 'top-accent',
          onCloseComplete: () => {
            navigate(PATH.dashboard);
          },
        });
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: type.stopLoading });
        toast({
          status: 'error',
          title: 'Failure',
          description: err?.response?.data?.msg,
          position: 'top-right',
          variant: 'top-accent',
        });

        setSubmitting(false);
      });
  };

export const myAccount = (id) => {
  return async (dispatch) => {
    await api
      .fetchMyAccount(id)
      .then(({ data }) => {
        dispatch({ type: type.myAccount, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
