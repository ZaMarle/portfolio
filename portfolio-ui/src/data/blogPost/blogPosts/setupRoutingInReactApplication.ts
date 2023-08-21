import { IBlogPost } from '../../../types/IBlogPost';

const setupRoutingInReactApplication: IBlogPost = {
  id: 1,
  title: 'Setup Routing in React Application.',
  description:
    'A simple implementation for routing in React using react-router-dom.',
  body: [
    { type: 'subheading', content: 'Install router library.' },
    { type: 'p', content: 'Run: npm install react-router-dom@latest' },
    { type: 'subheading', content: 'Add Initial Routes to app.tsx' },
    {
      type: 'code',
      content: `import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Projects',
      element: <Projects />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;`,
    },
  ],
};

export default setupRoutingInReactApplication;
