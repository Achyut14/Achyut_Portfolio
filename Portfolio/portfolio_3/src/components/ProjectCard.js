import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="border rounded-md p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
