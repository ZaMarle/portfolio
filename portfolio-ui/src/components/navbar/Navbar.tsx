import { AppBar, Button, Toolbar } from '@mui/material';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar className="navbar-component" position="static">
      <Toolbar style={{ alignSelf: 'center' }}>
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

        <div style={{ display: 'flex' }}>
          <Button
            className="button"
            variant="text"
            onClick={() => navigate('/')}
            style={{ color: '#fff' }}
          >
            Home
          </Button>
          <Button
            className="button"
            variant="text"
            onClick={() => navigate('/About')}
            style={{ color: '#fff' }}
          >
            About
          </Button>
          <Button
            className="button"
            variant="text"
            onClick={() => navigate('/Projects')}
            style={{ color: '#fff' }}
          >
            Projects
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
