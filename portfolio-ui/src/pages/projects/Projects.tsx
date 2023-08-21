import { Divider, Typography } from '@mui/material';
import { IProject } from '../../types/IProject';
import Project from '../../components/project/Project';
import Layout from '../../components/layout/Layout';
import { Data } from '../../data/data';

const Projects = () => {
  const data: Array<IProject> = Data.projects.list();

  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <Typography variant="h3">Rapid Loans</Typography>
        <Divider style={{ margin: '24px 0' }} />
        {data
          .filter((project) => project.association === 'Rapid Loans')
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
        <Typography variant="h3" style={{ marginTop: '60px' }}>
          Pack of 7
        </Typography>
        <Divider style={{ margin: '24px 0' }} />
        {data
          .filter((project) => project.association === 'Pack of 7')
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
        <Typography variant="h3" style={{ marginTop: '60px' }}>
          Personal
        </Typography>
        <Divider style={{ margin: '24px 0' }} />
        {data
          .filter((project) => project.association === 'Personal')
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </Layout>
  );
};

export default Projects;
