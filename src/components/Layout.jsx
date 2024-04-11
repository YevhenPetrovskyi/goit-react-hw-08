import AppBar from './AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <AppBar />
      </header>

      <main>
        {children}
        <Toaster position="top-right" />
      </main>
    </>
  );
};

export default Layout;
