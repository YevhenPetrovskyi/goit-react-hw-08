import { Box, Button, Container, Typography } from '@mui/material';
import DocumentTitle from '../components/DocumentTitle';
import { useAuth } from '../hooks';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container maxWidth="lg">
      <DocumentTitle>Personal Phonebook</DocumentTitle>
      <Box sx={{ textAlign: 'center', my: 5 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
          Welcome to Phonebook!
        </Typography>
        {isLoggedIn ? (
          <Typography variant="h4">
            Manage your contacts with ease and never lose touch.
          </Typography>
        ) : (
          <>
            <Typography sx={{ mb: 2 }} variant="h4">
              Please, log in or register.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                component={NavLink}
                to="/login"
                color="inherit"
                underline="none"
                variant="contained"
              >
                Login
              </Button>
              <Button
                component={NavLink}
                to="/register"
                color="inherit"
                variant="outlined"
              >
                Register
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
