
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'blog', element: <Blog /> },
      { path: 'about', element: <About /> },
      { path: 'team', element: <Team /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}
