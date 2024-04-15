import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Container, CssBaseline } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { selectTheme } from '../redux/theme/selectors';

import AppHeader from './AppBar/AppBar';

const Layout = ({ children }) => {
  const preferMode = useSelector(selectTheme);
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = preferMode !== null ? preferMode : preferDarkMode;
  console.log(mode);

  const appTheme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode ? 'dark' : 'light',
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <header>
        <AppHeader />
      </header>
      <Container maxWidth="lg">
        <main>
          {children}
          <Toaster position="top-right" />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
