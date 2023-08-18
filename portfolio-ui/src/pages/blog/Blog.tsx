import { Breadcrumbs, Link, Typography } from '@mui/material';
import Layout from '../../components/layout/Layout';

const Blog = () => {
  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Blog</Typography>
        </Breadcrumbs>
        <div>Blog</div>
        <div>Blog</div>
      </div>
    </Layout>
  );
};

export default Blog;
