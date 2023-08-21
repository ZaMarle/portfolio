import blogPostsData from './blogPostsData';

export const get = (id: number) => {
  const article = blogPostsData.find((a) => a.id === id);
  if (article) {
    return article;
  }
  throw new Error(`Unable to find blog post with id: ${id}`);
};

export const list = () => {
  return blogPostsData;
};
