import Chip from '@mui/material/Chip';
import { IProject } from '../../types/IProject';

interface IProjectProps {
  project: IProject;
}

const Project = ({ project }: IProjectProps) => {
  return (
    <div style={{ marginBottom: '120px' }}>
      <h4>{project.title}</h4>
      <div>{project.description}</div>
      <ul></ul>
      {project.myContributions.map((contribution) => (
        <li>{contribution}</li>
      ))}
      <div style={{ marginTop: '24px' }}>Tech Stack:</div>
      {project.techStack.map((item) => (
        <Chip
          label={item}
          variant="outlined"
          style={{ marginRight: '6px', marginTop: '6px' }}
        />
      ))}
      <div style={{ marginTop: '24px' }}>Languages:</div>
      {project.languages.map((item) => (
        <Chip
          label={item}
          variant="outlined"
          style={{ marginRight: '6px', marginTop: '6px' }}
        />
      ))}
      <div style={{ marginTop: '24px' }}>Other:</div>
      {project.other.map((items) => (
        <Chip
          label={items}
          variant="outlined"
          style={{ marginRight: '6px', marginTop: '6px' }}
        />
      ))}
    </div>
  );
};

export default Project;
