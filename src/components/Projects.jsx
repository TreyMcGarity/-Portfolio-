import React, { useState } from 'react';
import SaveTheAnimals from './SaveTheAnimals';
import CoachMe from './CoachMe';
import SmurfVillage from './SmurfVillage';
import Bubbles from './Bubbles';
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