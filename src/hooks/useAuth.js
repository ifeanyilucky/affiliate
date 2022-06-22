import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { myAccount } from '../redux/actions/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('partner'));
  const decoded = jwtDecode(token);
  const { userId } = decoded;
  console.log('userid', userId);
  useEffect(() => {
    dispatch(myAccount(userId));
  }, [dispatch]);
  const { account } = useSelector((state) => state.auth);

  return account;
};
