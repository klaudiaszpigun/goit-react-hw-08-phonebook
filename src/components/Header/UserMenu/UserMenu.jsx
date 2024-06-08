import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { logOut } from '../../../redux/operactions/login';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
