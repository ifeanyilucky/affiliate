import { useRoutes } from 'react-router-dom';
import ExternalLayout from '../layouts/external/ExternalLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/Auth/AuthLayout';
import { Dashboard, Home, Login, Register } from '../pages';
import Guest from '../Guard/Guest';
import Auth from '../Guard/Auth';

export default function Route() {
  return useRoutes([
    {
      element: <ExternalLayout />,
      path: '/',
      children: [{ element: <Home />, path: '/' }],
    },
    {
      element: (
        <Auth>
          <DashboardLayout />
        </Auth>
      ),
      children: [{ element: <Dashboard />, path: '/dashboard' }],
    },
    {
      element: (
        <Guest>
          <AuthLayout />
        </Guest>
      ),
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
  ]);
}
