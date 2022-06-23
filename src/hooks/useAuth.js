import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { myAccount } from '../redux/actions/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('partner'));
  let decoded = null;
  if (token) {
    decoded = jwtDecode(token);
  }

  useEffect(() => {
    if (token) dispatch(myAccount(decoded.userId));
  }, [dispatch]);
  const { account } = useSelector((state) => state.auth);
  if (!account) {
    return null;
  } else return account;
};

export const loggedIn = () => {
  const token = JSON.parse(localStorage.getItem('partner'));
  if (token) {
    return true;
  } else return false;
};
