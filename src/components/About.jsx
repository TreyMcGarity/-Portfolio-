import React, { useState } from 'react';
import Picture from '../utils/images/TREY.jpg';
import '../sass/About.scss';

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <img className="about-pic" src={Picture} alt="about-pic" />
    </div>
  );
}

export default About;