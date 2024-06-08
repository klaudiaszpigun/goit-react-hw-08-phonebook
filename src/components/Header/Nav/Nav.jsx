import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export const Nav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</div>
    </nav>
  );
};
