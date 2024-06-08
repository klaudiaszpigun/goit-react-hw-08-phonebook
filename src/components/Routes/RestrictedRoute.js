import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RestrictedRoute = ({ component, redirectTo }) => {
  const { isAuthenticated } = useAuth();
  console.log(`RestrictedRoute: isAuthenticated=${isAuthenticated}`);
  return !isAuthenticated ? component : <Navigate to={redirectTo} />;
};
