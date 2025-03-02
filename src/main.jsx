import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Nav } from './components/Nav.jsx'; {/*Jos const pitää olla noi aaltosulkeet */}
import ImageReveal from './components/ImageReveal.jsx';

import FrontPage from './pages/FrontPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Nav />
      <ImageReveal />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </StrictMode>
)
