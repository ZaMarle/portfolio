import Chip from '@mui/material/Chip';
import { Typography } from '@mui/material';
import { IProject } from '../../types/IProject';

interface IProjectProps {
  project: IProject;
}

const Project = ({ project }: IProjectProps) => {
  return (
    <div style={{ marginBottom: '120px' }}>
      <Typography variant="h4">{project.title}</Typography>
      <Typography variant="body1">{project.description}</Typography>
      <ul>
        {project.myContributions.map((contribution, index) => (
          <li key={index}>
            <Typography variant="body1">{contribution}</Typography>
          </li>
        ))}
      </ul>
      <Typography variant="h6" style={{ marginTop: '24px' }}>
        Tech Stack:
      </Typography>
      {project.techStack.map((item, index) => (
        <Chip
          key={index}
          label={item}
          variant="outlined"
          style={{ marginRight: '6px', marginTop: '6px' }}
        />
      ))}
      <Typography variant="h6" style={{ marginTop: '24px' }}>
        Languages:
      </Typography>
      {project.languages.map((item, index) => (
        <Chip
          key={index}
          label={item}
          variant="outlined"
          style={{ marginRight: '6px', marginTop: '6px' }}
        />
      ))}
      <Typography variant="h6" style={{ marginTop: '24px' }}>
        Other:
      </Typography>
      {project.other.map((items, index) => (
        <Chip
          key={index}
          label={items}
          variant="outlined"
          style={{ marginRight: '6px', marginTop: '6px' }}
        />
      ))}
    </div>
  );
};

export default Project;
