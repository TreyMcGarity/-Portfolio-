import React from 'react';
import WDS from '../utils/images/watchdogs_symbol.png';
import '../sass/Projects.scss';

const Projects = () => {
  return (
    <div className="projects" id="projects">
    <img className="project"src={WDS} alt="watchdogs symbol"/>
    <img className="project"src={WDS} alt="watchdogs symbol"/>
    <img className="project"src={WDS} alt="watchdogs symbol"/>
    <img className="project"src={WDS} alt="watchdogs symbol"/>
    <img className="project"src={WDS} alt="watchdogs symbol"/>
    <img className="project"src={WDS} alt="watchdogs symbol"/>
    </div>
  );
}

export default Projects;