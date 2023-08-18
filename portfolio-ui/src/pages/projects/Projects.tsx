import { IProject } from '../../types/IProject';
import Project from '../../components/project/Project';
import Layout from '../../components/layout/Layout';

const Projects = () => {
  const data: Array<IProject> = [
    {
      association: 'Rapid Loans',
      title: 'Taco',
      description:
        'A software solution aimed at overhauling the existing framework for overseeing the lifecycle of a loan, spanning from origination and throughout the collection phase until final completion.',
      myContributions: [
        'Implemented user authentication and authorization using ASP.NET Core Identity.',
        'Integrated routing functionality, incorporating permissions-based routing into the application.',
        'Established an intuitive and organized file structure for the React application.',
        'Implemented CI/CD pipeline to facilitate the deployment of React and ASP.NET Core web API applications across development, staging, and production environments.',
        'Configured Azure resources, including a static web application for the React frontend, a web application for the ASP.NET Core Web API, and a Standard S0 SQL Database.',
        'Bootstrapped project, including setting up React application using Vite, ASP.NET Core Web API, Entity Framework and SQL Server.',
        'Developed features to manage the management of users and permissions.',
        'Developed reusable components consumed by pages of the applications.',
        'Designed and implemented reusable components that are utilized across application to reduce code duplication',
        'Researched and integrated react-hook-form library to efficiently manage forms, eliminating the need to develop a costly in-house solution.',
        'Developed custom hooks to extract repeated logic into a centralized location for improved code maintainability and reusability.',
        'Participated actively in Agile processes, including daily standups, sprint planning sessions, backlog grooming sessions, and retrospectives, contributing to effective team collaboration and project progress.',
        'Offered guidance and mentorship to junior developers, aiding their growth and skill development within the team',
        'Developed a Bash script that simplifies the process of running the application during development, replacing the need for lengthy dotnet commands with a user-friendly and efficient script.',
        'Engaged in code reviews providing valuable feedback and insights to enhance code quality and ensure best practices.',
        'Implemented the Mediator pattern to facilitate communication and interaction between controllers and the domain, promoting a more organized and decoupled architecture.',
        'Implemented ESLint to the project to uphold coding standards, ensure consistent formatting, and proactively prevent coding errors.',
        'Designed and built an error handling pipeline that delivers informative messages to clients, enhancing developer experience and providing clear insights into issues.',
      ],
      techStack: ['React', 'ASP.NET Web API'],
      languages: ['Typescript', 'HTML', 'CSS', 'C#', 'Bash'],
      other: ['MUI', 'Vite', 'eslint', 'Entity Framework', 'Azure Devops'],
    },
    {
      association: 'Rapid Loans',
      title: 'Website & CMS',
      description: 'A dynamic website with CMS integration.',
      myContributions: [
        'Implemented CI/CD pipeline to facilitate the deployment of Gatsby and Strapi applications across development, staging, and production environments.',
        'Conducted an in-depth analysis to identify the most suitable technology stack.',
        'Collaborated closely with designer and marketers to gather project requirements.',
        'Integrated Gatsby application with Strapi CMS to handle the management of content.',
        'Developed reusable component consistent with Figma design.',
        'Consumed GraphQL API.',
        'Implemented custom brand theming',
        'Used Confluence to create and maintain documentation.',
        'Implemented Azure Devops to track and manage tasks',
        'Implemented ESLint to the project to uphold coding standards, ensure consistent formatting, and proactively prevent coding errors.',
      ],
      techStack: ['Gatsby', 'Strapi'],
      languages: ['Typescript', 'HTML', 'CSS'],
      other: ['Vite', 'GraphQL', 'eslint', 'Azure Devops'],
    },
    {
      association: 'Pack of 7',
      title: 'Microflows',
      description: 'description of project',
      myContributions: [
        'Established a CI/CD pipeline, streamlining the deployment process of the Angular application to an Azure Static Web Application.',
        'Implemented authentication and authorization using Azure Active Directory and Angular Msal.',
        'Implement template driven forms to handle the lifecycle of forms.',
        'Implemented Angular modules to achieve lazy loading and code encapsulation among other benefits.',
        'Extended Angular Material to develop custom, reusable components tailored to the specific needs of the application.',
        'Implemented Object-Oriented Programming (OOP) practices to enhance code organization, maintainability, and reusability.',
        'Planned and executed the design and implementation of a ticketing system, feature',
        'Designed and constructed a comment system, enabling users to engage in discussions in the ticketing system.',
        'Implemented a design to enable multitenancy, allowing the application to serve multiple clients',
        'Leveraged the power of OData to implement sophisticated filtering capabilities, empowering users with advanced data filtering options.',
        'Implemented Azure Blob Storage to establish a reliable storage solution for handling the storage of specific data.',
      ],
      techStack: [
        'Angular',
        'ASP.NET Core',
        // 'Azure Static Web App',
        // 'Azure App Service',
        // 'Azure SQL Server',
      ],
      languages: ['SQL', 'C#', 'Typescript', 'HTML', 'CSS'],
      other: ['Azure Devops', 'Angular Msal', 'Angular Material', 'Odata'],
    },
    {
      association: 'Pack of 7',
      title: 'Commerzbank Dashboard',
      description: 'A Dashboard for the Commerzbank intranet.',
      myContributions: [
        'Implemented ESLint to the project to uphold coding standards, ensure consistent formatting, and proactively prevent coding errors.',
        'Create Components library to follow style guide.',
        'Refactoring legacy code to follow style guide.',
        'Collaborated seamlessly with a developer situated in a different timezone, demonstrating effective communication and teamwork across geographical boundaries.',
      ],
      techStack: ['React'],
      languages: ['Typescript', 'HTML', 'CSS'],
      other: ['eslint', 'Jira', 'bitbucket'],
    },
    {
      association: 'Pack of 7',
      title: 'Roomable',
      description: 'A web application and Web API to manage the room bookings.',
      myContributions: [
        'Established a CI/CD pipeline, streamlining the deployment process of the Angular application to an Azure Static Web Application.',
        'Integrated maps using the Azure Maps API.',
        'Created algorithm to filter available rooms.',
        'Implemented language switching functionality between English and German.',
        'Implemented Azure Blob Storage to establish a reliable storage solution for handling the storage of specific data.',
        'Implemented authentication and authorization using Azure Active Directory and Angular Msal.',
        'Designed and constructed a JSON-based RESTful API, subsequently integrating it into the frontend application for seamless data exchange and interaction.',
      ],
      techStack: [
        'Angular',
        'ASP.NET Core',
        // 'Azure Static Web App',
        // 'Azure App Service',
        // 'Azure SQL Server',
      ],
      languages: ['Typescript', 'HTML', 'CSS', 'C#', 'SQL'],
      other: ['Azure Devops', 'Angular Material', 'Angular Msal'],
    },
    {
      association: 'Pack of 7',
      title: 'Skillify',
      description:
        'Web application where users can search for peoples skills within an organisation.',
      myContributions: [
        'Built service to consume data from Sharepoint API.',
        'Developed an intuitive user interface that enables users to search for and filter individuals based on specific criteria.',
        'Deployed the application to SharePoint.',
        'Adhered to OOP design principles established by fellow developers.',
        'Utilized Git and GitHub for version control, facilitating seamless collaboration among developers.',
      ],
      techStack: ['Angular', 'Sharepoint'],
      languages: ['Typescript', 'HTML', 'CSS'],
      other: ['Angular Material', 'Github'],
    },
    // {
    //   association: 'Personal',
    //   title: 'Home Server',
    //   description:
    //     'Physical server setup to better understand the technology and for hosting personal projects.',
    //   myContributions: [
    //     'Conducted comprehensive research on server hardware options to make an informed decision that aligns with my specific requirements.',
    //   ],
    //   techStack: ['Bevy'],
    //   languages: ['Rust'],
    //   other: ['Docker', 'Rancher'],
    // },
    {
      association: 'Personal',
      title: 'Web3 Game',
      description: 'description of project',
      myContributions: ['Borrow checker'],
      techStack: ['Bevy'],
      languages: ['Rust'],
      other: ['Docker', 'Rancher'],
    },
  ];

  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <h3>Rapid Loans</h3>
        {data
          .filter((project) => project.association === 'Rapid Loans')
          .map((project) => (
            <Project project={project} />
          ))}
        <h3 style={{ marginTop: '60px' }}>Pack of 7</h3>
        {data
          .filter((project) => project.association === 'Pack of 7')
          .map((project) => (
            <Project project={project} />
          ))}
        <h3 style={{ marginTop: '60px' }}>Personal</h3>
        {data
          .filter((project) => project.association === 'Personal')
          .map((project) => (
            <Project project={project} />
          ))}
      </div>
    </Layout>
  );
};

export default Projects;
