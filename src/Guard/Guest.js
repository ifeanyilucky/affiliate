import { Navigate } from 'react-router-dom';
import { PATH } from '../routes/paths';

export default function Guest({ children }) {
  const isAuthenticated = JSON.parse(localStorage.getItem('partner'));

  if (isAuthenticated) return <Navigate to={PATH.dashboard} replace />;
  return <>{children}</>;
}
