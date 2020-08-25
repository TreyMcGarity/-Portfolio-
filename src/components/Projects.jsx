import React, { useState } from 'react';
import Card from './Card.jsx';
import '../sass/Projects.scss';

const Projects = () => {
  const projects = [
    {
      "title": "Save The Animals",
      "hosted": "https://lets-save-the-animals.netlify.app/",
      "repo": "https://github.com/TreyMcGarity/mcgarity-marketing-page",
      "first": "../utils/images/screenShots/save-the-animals-home-top.png",
      "second": "../utils/images/screenShots/save-the-animals-home-bottom.png",
      "third": "../utils/images/screenShots/save-the-animals-about-member.png"
    },
    {
      "title": "Coach Me",
      "hosted": "#",
      "repo": "https://github.com/TreyMcGarity/coach-me-fe",
      "first": "../utils/images/screenShots/client-login.png",
      "second": "../utils/images/screenShots/coach-login.png",
      "third": "../utils/images/screenShots/coach-dashboard.png"
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