import React from 'react';
import Home from '../components/Home.jsx';
import Projects from './Projects.jsx';
import Media from './Media.jsx';
import '../sass/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="content">
          <Media />
          <Home />
          <Projects />
        </div>
    </div>
  );
}

export default Portfolio;
