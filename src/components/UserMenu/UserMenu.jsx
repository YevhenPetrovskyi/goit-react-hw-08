import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { apiLogOutUser } from '../../redux/auth/operation';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(apiLogOutUser())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
