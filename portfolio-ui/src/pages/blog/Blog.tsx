import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Data } from '../../data/data';
import Layout from '../../components/layout/Layout';
import { IBlogPost } from '../../types/IBlogPost';
import './Blog.scss';

const Blog = () => {
  const navigate = useNavigate();
  const data: Array<IBlogPost> = Data.blogPosts.list();
  return (
    <Layout>
      <div className="blog-page-component" style={{ width: '100%' }}>
        {/* <div>
        I've recently made the decision to launch this blog with the purpose
        of creating a personal knowledge repository. It will facilitate quick
        access to my previous work, serving as a valuable resource for future
        implementations. This initiative is particularly important to
        safeguard against the potential loss of access to past projects due to
        changes in company affiliations. Beyond that, my blog will serve as a
        platform to share solutions I've developed, offering assistance to
        those encountering similar challenges. Furthermore, it will enable
        prospective employers to gain insight into my coding style and
        skillset, allowing them to form a better understanding of my
        capabilities and approach to coding.
      </div> */}
        {data.map((article) => (
          <div key={article.id} style={{ marginBottom: '40px' }}>
            <Button
              className="button"
              onClick={() => navigate(`/Blog/${article.id}`)}
            >
              <Typography variant="h3">{article.title}</Typography>
            </Button>
            <Typography variant="h6">{article.description}</Typography>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
