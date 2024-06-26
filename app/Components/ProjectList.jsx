import React from 'react';
import ProjectCard from './ProjectCard';
import AnimateOnView from './hooks/AnimateOnView';

const ProjectList = ({ projects, onViewDetails }) => (
  <div className="flex flex-wrap justify-center space-x-4">
    {projects.map((project, index) => (
      <AnimateOnView
        key={project.title}
        direction="left"
        delay={0.4 + index * 0.2}
      >
        <ProjectCard
          imageSrc={project.imageSrc}
          title={project.title}
          description={project.description}
          webLink={project.webLink}
          githubLink={project.githubLink}
          onClick={() => onViewDetails(
            project.title,
            project.description,
            project.webLink,
            project.githubLink,
            project.imageSrc
          )}
        />
      </AnimateOnView>
    ))}
  </div>
);

export default ProjectList;
