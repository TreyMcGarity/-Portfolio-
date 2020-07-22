import React, { useState } from 'react';
import FakeProject from './FakeProject';
import CoachMe from './CoachMe';
import arrowLeft from '../utils/images/left-arrow.png';
import arrowRight from '../utils/images/right-arrow.png';
import '../sass/Projects.scss';

const Projects = () => {
  const [current, setCurrent] = useState(true)
  return (
    <div className="projects" id="projects">
      <img src={arrowLeft} alt="left arrow" />
      {current 
      ?
        <CoachMe />
      :
        <FakeProject />
      }
      <img src={arrowRight} alt="right arrow" />
    </div>
  );
}

export default Projects;