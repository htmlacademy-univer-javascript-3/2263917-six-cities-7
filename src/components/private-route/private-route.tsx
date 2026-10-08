import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

type PrivateRouteProps = {
  children: ReactNode;
  isAuthorized: boolean;
};

export const PrivateRoute = ({ children, isAuthorized }: PrivateRouteProps) => {
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
