import projectsData from './projectsData';

export const get = (id: number) => {
  const article = projectsData.find((a) => a.id === id);
  if (article) {
    return article;
  }
  throw new Error(`Unable to find article with id: ${id}`);
};

export const list = () => {
  return projectsData;
};
