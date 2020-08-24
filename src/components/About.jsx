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
        <h4>(256) 929-3066</h4>
        <h4>trey.mcgarity99@gmail.com</h4>
      </div>
      <div className="right">
        <p>Growing up in the two-thousands meant being connected with technology everyday. Thus beginning an inseparable bond between my curiosity and computer systems’ development. During my highschool years, I started taking apart computers to learn what was inside and how they operated, but that quickly evolved to the brain of the machine and it never ended.</p>
        <p>In College, I studied software development and Object-Oriented programming then full stack web development which intertwined concepts of designing interactive websites and applications and servers with intergraded databases that managed necessary resources.</p> 
        <p>I have a firm belief that anyone can do anything with the proper passion to pursue strict and ambitious goals to complete the task at hand, and it's never a bad thing to ask for help from others. </p>
      </div>
        
    </div>
  );
}

export default About;