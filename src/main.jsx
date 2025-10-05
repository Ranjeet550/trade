import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import Chart from './pages/chart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout
    children: [
      { index: true, element: <Home /> },
  { path: 'courses', element: <Courses /> },
  { path: 'blog', element: <Blog /> },
  { path: 'chart', element: <Chart /> },
  { path: 'about', element: <About /> },
  { path: 'team', element: <Team /> },
  { path: 'contact', element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
