import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import BlogPost from './pages/blog/pages/blog-post/BlogPost';

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
    {
      path: '/Blog',
      element: <Blog />,
    },
    {
      path: '/Blog/:id',
      element: <BlogPost />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
