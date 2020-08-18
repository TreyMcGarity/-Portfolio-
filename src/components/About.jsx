import React from 'react';
import Picture from '../utils/images/TREY.jpg';
import Resume from '../utils/documents/Resume.docx';
import '../sass/About.scss';

const About = () => {
  return (
    <div className="about">
      <img className="pic" src={Picture} alt="about-pic" />
          <p>trey.mcgarity99@gmail.com</p>
          <p>(256) 929-3066</p>
          <a href={Resume}>Resume</a>
    </div>
  );
}

export default About;