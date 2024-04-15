import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { MenuList, Link } from '@mui/material';
const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <MenuList open sx={{ display: 'flex', gap: 3, flexGrow: 1 }}>
        <Link
          component={NavLink}
          to="/"
          color={'inherit'}
          underline="none"
          variant="h6"
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            component={NavLink}
            to="/contacts"
            color={'inherit'}
            underline="none"
            variant="h6"
          >
            Contacts
          </Link>
        )}
      </MenuList>
    </nav>
  );
};

export default Navigation;
