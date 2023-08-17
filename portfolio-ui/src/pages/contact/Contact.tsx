import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
// import React from 'react';

const Contact = () => {
  // const form = React.useState();

  return (
    <div
      style={{
        backgroundColor: 'beige',
        minHeight: '100%',
      }}
    >
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
        <div style={{ width: '100%' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Contact</Typography>
          </Breadcrumbs>
          <div>Contact</div>
          <div>Contact</div>
        </div>
      </Grid>
    </div>
  );
};

export default Contact;
