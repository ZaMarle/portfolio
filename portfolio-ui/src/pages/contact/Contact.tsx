import { Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Layout from '../../components/layout/Layout';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // You can implement your submission logic here, e.g., send data to a server.
  };

  return (
    <Layout>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <h3>Get in touch!</h3>
        <div style={{ marginBottom: '40px' }}>
          Whether you're an employer with a passion for software development or
          someone looking to connect, I'm here for you. As a dedicated developer
          with a love for his craft, I'm ready to contribute, teach and learn.
          Let's connect and make things happen.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} style={{}}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="firstname"
                label="Firstname"
                variant="standard"
                style={{ width: '100%' }}
                {...register('firstname', { required: true })}
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
                {...register('lastname', { required: true })}
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
                {...register('email', {
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
