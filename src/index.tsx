import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.scss';
import './styles/_fontsTypography.scss';
import { App } from './App';
import { Features } from './components/FeaturesPage/Features';
import { Home } from './components/HomePage/Home';
import { Blog } from './components/BlogPage/Blog';
import { Shop } from './components/ShopPage/Shop';
import { About } from './components/AboutPage/About';
import { Contact } from './components/ContactPage/Contact';
// import { Blog } from './components/BlogPage/Blog';
// import { Shop } from './components/ShopPage/Shop';
// import { About } from './components/AboutPage/About';
// import { Contact } from './components/ContactPage/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
