import { NavLink } from 'react-router-dom';
import { Link, Box } from '@mui/material';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Link
        component={NavLink}
        to="/register"
        color="inherit"
        underline="none"
        variant="h6"
      >
        Register
      </Link>
      <Link
        component={NavLink}
        to="/login"
        color="inherit"
        underline="none"
        variant="h6"
      >
        Login
      </Link>
    </Box>
  );
};

export default AuthNav;
