import React from 'react';
import Home from '../components/Home.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import '../sass/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="content">
          <Home />
          <Projects />
        </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
