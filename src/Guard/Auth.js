import { useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import { Login } from '../pages';

export default function Auth({ children }) {
  const isAuthenticated = JSON.parse(localStorage.getItem('partner'));

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = React.useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }
  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
