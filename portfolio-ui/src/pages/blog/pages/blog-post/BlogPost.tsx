import { useEffect, useState } from 'react';
import { Divider, Typography } from '@mui/material';
import Layout from '../../../../components/layout/Layout';
import { Data } from '../../../../data/data';
import { IBlogPost } from '../../../../types/IBlogPost';
import { IBlogPostBodyElement } from '../../../../types/IBlogPostBodyElement';

const BlogPost = () => {
  const getCurrentIdFromUrl = () => {
    const path = window.location.pathname;
    const parts = path.split('/').filter((part) => part !== '');

    return parts[1];
  };

  const [current, setCurrent] = useState<IBlogPost>();
  useEffect(() => {
    const SCurrentId = getCurrentIdFromUrl();
    const NCurrentId = parseFloat(SCurrentId);
    if (!Number.isNaN(NCurrentId)) {
      const currentBlogPost = Data.blogPosts.get(NCurrentId);
      setCurrent(currentBlogPost);
    } else {
      throw new Error('Invalid input for parsing to float.');
    }
  }, []);

  const buildElementFromBodyElement = (
    element: IBlogPostBodyElement,
    key: number,
  ): JSX.Element | undefined => {
    if ('content' in element) {
      const content = Array.isArray(element.content)
        ? element.content.map((c, index) =>
            buildElementFromBodyElement(c, index),
          )
        : element.content;

      switch (element.type) {
        case 'subheading':
          return (
            <Typography key={key} variant="h5" style={{ marginTop: '24px' }}>
              {content}
            </Typography>
          );
        case 'code':
          return (
            <pre key={key}>
              <code>{content}</code>
            </pre>
          );
        case 'p':
          return (
            <Typography key={key} variant="body1">
              {content}
            </Typography>
          );
        case 'ul':
          return <ul key={key}>{content}</ul>;
        case 'li':
          return <li key={key}>{content}</li>;
        default:
          throw new Error('Unhandled jsx builder function');
      }
    }
    return undefined;
  };

  return (
    <Layout>
      <div className="blog-post-page-component" style={{ width: '100%' }}>
        {current && (
          <div>
            <Typography variant="h3">{current.title}</Typography>
            <Typography variant="h6">{current.description}</Typography>
            <Divider style={{ marginTop: '24px' }} />
            {current.body.map((bodyItem, index) =>
              buildElementFromBodyElement(bodyItem, index),
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;
