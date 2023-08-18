import { Grid } from '@mui/material';
import Navbar from '../navbar/Navbar';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: 'beige',
        minHeight: '100%',
      }}
    >
      <Navbar />
      <Grid
        style={{
          margin: '0 auto 0 auto',
          padding: '24px',
          width: '100%',
          maxWidth: '1200px',
          height: '100%',
          color: '#213547',
          fontFamily: 'Helvetica',
          textAlign: 'left',
        }}
        container
        spacing={2}
      >
        {children}
      </Grid>
    </div>
  );
};

export default Layout;
