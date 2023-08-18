import { Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  console.log(theme);

  const currentBreakpoint = () => {
    if (useMediaQuery(theme.breakpoints.down('md'))) {
      return 'stacked';
    }
  };

  return (
    <div className="home-page-component" style={{ height: '100%' }}>
      <Grid
        className={`grid-outer ${currentBreakpoint()}`}
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={5}
          className={`grid-item-one ${currentBreakpoint()}`}
          style={{}}
        >
          <h3>ZACHARY MARLEY</h3>
          <div>
            Full stack software developer with expertise in front-end, back-end,
            database and devops.
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Button
            className="button"
            variant="text"
            onClick={() => navigate('/About')}
          >
            About
          </Button>
          <Button
            className="button"
            variant="text"
            onClick={() => navigate('/Projects')}
          >
            Projects
          </Button>
          <Button
            className="button"
            variant="text"
            onClick={() => navigate('/Blog')}
          >
            Blog
          </Button>
          <Button
            className="button"
            variant="text"
            onClick={() => navigate('/Contact')}
          >
            Contact
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
