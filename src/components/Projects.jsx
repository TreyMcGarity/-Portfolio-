import React, { useState } from 'react';
import Card from './Card';
import '../sass/Projects.scss';

const Projects = () => {
  const projects = [
    {
      "title": "Save The Animals",
      "hosted": "https://lets-save-the-animals.netlify.app/",
      "repo": "https://github.com/TreyMcGarity/mcgarity-marketing-page"
    },
    {
      "title": "Coach Me",
      "hosted": "#",
      "repo": "https://github.com/TreyMcGarity/coach-me-fe"
    },
  ]
  return (
    <div className="home">
        <div className="text">
          <h2>Some of my Work!</h2>
        </div>
      <div className="projects">
        {projects.map((project, index) => (
          <Card key={index}
          title={project.title}
          hosted={project.hosted}
          repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;