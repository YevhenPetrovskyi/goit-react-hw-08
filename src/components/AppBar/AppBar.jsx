import { useAuth } from '../../hooks';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import ThemeSwitchButton from '../ThemeSwitchButton/ThemeSwitchButton';
import { AppBar as AppHeader, Box, Container, Toolbar } from '@mui/material';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader position="static">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Navigation />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <ThemeSwitchButton />
          </Box>
        </Toolbar>
      </Container>
    </AppHeader>
  );
};

export default AppBar;
