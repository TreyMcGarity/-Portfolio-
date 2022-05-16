import React from 'react';
import Picture from '../utils/images/TREY.jpg';
import Resume from '../utils/documents/Resume.docx';
import '../sass/About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <img className="pic" src={Picture} alt="my-portrait" />
        <a href={Resume}>Resume</a>
      </div>
      <div className="right">
        <p>Description</p>
        </div>
        
    </div>
  );
}

export default About;