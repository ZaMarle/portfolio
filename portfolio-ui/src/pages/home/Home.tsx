import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page-component" style={{ height: '100%' }}>
      <Grid
        style={{
          margin: '0 auto 0 auto',
          padding: '24px',
          width: '100%',
          maxWidth: '1200px',
          height: '100%',
          alignItems: 'center',
          color: '#213547',
          fontFamily: 'Helvetica',
        }}
        container
        spacing={2}
      >
        <Grid
          item
          xs={5}
          style={{
            textAlign: 'left',
            paddingRight: '105px',
            marginTop: '255px',
          }}
        >
          <h3>ZACHARY MARLEY</h3>
          <div>
            Full stack software developer with a strong foundation in front-end,
            back-end, Database and Devops.
          </div>
        </Grid>
        <Grid item xs={7}>
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
