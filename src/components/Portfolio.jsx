import React from 'react';
import Navigation from "../components/Navigation.jsx";
import Home from '../components/Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import '../sass/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
          <Navigation />
          <div className="content">
            <Home />
            <About />
            <Projects />
          </div>
          <Footer />
    </div>
  );
}

export default Portfolio;
