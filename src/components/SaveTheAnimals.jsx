import React, { useState } from 'react';
import Module from '../components/Module';
import Card from '../components/Card';
import HomeTop from '../utils/images/screenShots/save-the-animals-home-top.png';
import HomeBottom from '../utils/images/screenShots/save-the-animals-home-bottom.png';
import AboutMember from '../utils/images/screenShots/save-the-animals-about-member.png';

const SaveTheAnimals = () => {
  return (
    <div className="save-the-animals">
      <img className="project" src={HomeTop} alt="screenshot"/>
      <img className="project" src={HomeBottom} alt="screenshot"/>
      <img className="project" src={AboutMember} alt="screenshot"/>
    </div>
  );
}

export default SaveTheAnimals;