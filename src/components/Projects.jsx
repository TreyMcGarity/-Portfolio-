import React, { useState } from 'react';
import Card from './Card.jsx';
import HomeTop from '../utils/images/screenShots/save-the-animals-home-top.png';
import HomeBottom from '../utils/images/screenShots/save-the-animals-home-bottom.png';
import AboutMember from '../utils/images/screenShots/save-the-animals-about-member.png';
import clientLogin from '../utils/images/screenShots/client-login.png';
import coachLogin from '../utils/images/screenShots/coach-login.png';
import coachDashboard from '../utils/images/screenShots/coach-dashboard.png';
import '../sass/Projects.scss';

const Projects = () => {
  const projects = [
    {
      "title": "Save The Animals",
      "hosted": "https://lets-save-the-animals.netlify.app/",
      "repo": "https://github.com/TreyMcGarity/mcgarity-marketing-page",
      "first": HomeTop,
      "second": HomeBottom,
      "third": AboutMember
    },
    {
      "title": "Coach Me",
      "hosted": "#",
      "repo": "https://github.com/TreyMcGarity/coach-me-fe",
      "first": "#",  //clientLogin
      "second": "#", //coachLogin
      "third": "#"//coachDashboard
    },
    {
      "title": "Smurf Village",
      "hosted": "#",
      "repo": "#",
      "first": "",
      "second": "",
      "third": ""
    },
    {
      "title": "Bubbles",
      "hosted": "#",
      "repo": "#",
      "first": "",
      "second": "",
      "third": ""
    },
  ]
  const [show, setShow] = useState(false)

  return (
    <div className="home">
      <div className="text">
        <h2>Some of my Work!</h2>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <Card key={index}
            id={index}
            title={project.title}
            show={show}
            setShow={setShow}
            hosted={project.hosted}
            repo={project.repo}
            first={project.first}
            second={project.second}
            third={project.third}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;