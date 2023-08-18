import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const navItems = ['About', 'Projects', 'Blog', 'Contact'];

  return (
    <AppBar
      className="navbar-component"
      position="static"
      style={{ backgroundColor: 'beige', boxShadow: 'none' }}
    >
      <Toolbar>
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          <IconButton
            className="button"
            aria-label="settings"
            style={{ justifySelf: 'left' }}
            onClick={() => navigate(`/`)}
          >
            <HomeIcon />
          </IconButton>
          <div>
            {navItems.map((item) => (
              <Button
                key={item}
                className="button"
                variant="text"
                onClick={() => navigate(`/${item}`)}
              >
                {item}
              </Button>
            ))}
            {/* <IconButton aria-label="settings">
              <SettingsIcon style={{ color: '#213547' }} />
            </IconButton> */}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
