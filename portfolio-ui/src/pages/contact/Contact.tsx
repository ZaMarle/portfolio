import { Button, Grid, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../../components/layout/Layout';

interface IContactForm {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>();

  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h3">Get in touch!</Typography>
        <Typography variant="body1" style={{ marginBottom: '40px' }}>
          Whether you&apos;re an employer with a passion for software
          development or someone looking to connect, I&apos;m here for you. As a
          dedicated developer with a love for his craft, I&apos;m ready to
          contribute, teach and learn. Let&apos;s connect and make things
          happen.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} style={{}}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="firstname"
                label="Firstname"
                variant="standard"
                style={{ width: '100%' }}
                inputProps={register('firstname', { required: true })}
              />
              {errors.firstname && (
                <p style={{ color: 'red' }}>This field is required</p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="lastname"
                label="Lastname"
                variant="standard"
                style={{ width: '100%' }}
                inputProps={register('lastname', { required: true })}
              />
              {errors.lastname && (
                <p style={{ color: 'red' }}>This field is required</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="standard"
                style={{ width: '100%' }}
                inputProps={register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <p style={{ color: 'red' }}>
                  Please enter a valid email address
                </p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-multiline-flexible"
                label="Message"
                multiline
                maxRows={8}
                minRows={4}
                variant="standard"
                style={{ width: '100%' }}
                inputProps={register('message', { required: true })}
              />
              {errors.message && (
                <p style={{ color: 'red' }}>This field is required</p>
              )}
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: '16px', float: 'right' }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
