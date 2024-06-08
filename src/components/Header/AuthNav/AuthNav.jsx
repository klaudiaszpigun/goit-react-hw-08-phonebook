import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div>
        <NavLink to="/login">Log In</NavLink>
      </div>
    </nav>
  );
};
