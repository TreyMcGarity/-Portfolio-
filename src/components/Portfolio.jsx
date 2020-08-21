import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Media from './Media.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import '../sass/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <Media />
        <div className="content">
            <Route exact path="/" component={Projects}/>
            <Route exact path="/about" component={About}/>
        </div>
    </div>
  );
}

export default Portfolio;