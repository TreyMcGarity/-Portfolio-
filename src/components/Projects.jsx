import React from 'react';
import SaveTheAnimals from './SaveTheAnimals';
import CoachMe from './CoachMe';
import SmurfVillage from './SmurfVillage';
import Bubbles from './Bubbles';
import Card from './Card';
import '../sass/Projects.scss';

const Projects = () => {
  return (
    <div className="home">
      <div className="text">
        <h2>Some of my Work!</h2>
      </div>
      <h3>Front-End:</h3>
      <div className="projects">
        <SaveTheAnimals />
        <CoachMe />
        <SmurfVillage />
        <Bubbles />
      </div>
      <h3>Back-End:</h3>
      <div className="projects">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;