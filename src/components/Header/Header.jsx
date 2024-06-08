import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from './AuthNav/AuthNav';

import { Nav } from './Nav/Nav';
import { UserMenu } from './UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div>
        <div>
          <Nav />
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
