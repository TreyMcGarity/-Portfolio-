import React from 'react';
import SaveTheAnimals from './projects/SaveTheAnimals';
import CoachMe from './projects/CoachMe';
import SmurfVillage from './projects/SmurfVillage';
import Bubbles from './projects/Bubbles';
import '../sass/Projects.scss';

const Projects = () => {
  return (
    <div className="home">
      <div className="text">
        <h2>Some of my Work!</h2>
      </div>
      <div className="projects">
        <SaveTheAnimals />
        <CoachMe />
        <SmurfVillage />
        <Bubbles />
      </div>
    </div>
  );
}

export default Projects;