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
    {
      "title": "Bubbles",
      "hosted": "#",
      "repo": "https://github.com/TreyMcGarity/coach-me-fe"
    },
    {
      "title": "Smurf Village",
      "hosted": "#",
      "repo": "https://github.com/TreyMcGarity/coach-me-fe"
    }
  ]
  return (
    <div>
        <h1>Projects</h1>
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