import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './useAuth';
import { getInvestments } from '../redux/actions/data';

export const useAffiliate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvestments());
  }, []);
  const { investments } = useSelector((state) => state.data);
  // add all commision

  const account = useAuth();
  const referredUsers = investments.filter(
    (i) => i.user?.referredBy === account.referralCode
  );
  const sumAll = referredUsers.reduce((accumulator, investment) => {
    return accumulator + investment.amount * 0.1;
  }, 0);

  return {
    commisionBalance: sumAll,
    referredUsers: referredUsers,
    amountWithdrawn: 0,
  };
};
