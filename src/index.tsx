import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import './styles/_fontsTypography.scss';
import { App } from './App';
import { Features } from './components/FeaturesPage/Features';
import { Home } from './components/HomePage/Home';
import { Blog } from './components/BlogPage/Blog';
import { Shop } from './components/ShopPage/Shop';
import { About } from './components/AboutPage/About';
import { Contact } from './components/ContactPage/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
