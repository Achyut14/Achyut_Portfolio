import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    { title: 'Jepoardy', description: 'A fun and interactive trivia game inspired by the classic Jeopardy show, built entirely with JavaScript. It features dynamic question loading, score tracking, and category selection..', link: 'https://github.com/Achyut14/Demo/tree/main/Jepoardy-Project' },
    { title: 'News Project', description: 'Built with Python and Flask, this app allows users to create accounts, securely log in, and search for news through an integrated News API. Users can save favorite articles and easily log out with a button in the top-right corner for secure browsing.', link: 'https://github.com/Achyut14/Demo/tree/master/Capstone/myapp' },
    { title: 'Soccer Stats', description: 'A stats tracker for soccer players and teams, built with React, Node, and integrated with an API. It delivers quick access to key performance metrics, like goals and assists, with user-friendly filters for tailored insights.', link: 'https://github.com/Achyut14/soccer2' },
    { title: 'Fruit Search Project', description: 'A simple and interactive search tool built with JavaScript, allowing users to find fruit information quickly. Features clean styling for an enjoyable user experience', link: 'https://github.com/Achyut14/Demo/tree/main/fruit-search-project' },
];

  return (
    <section id="projects" className="section-padding py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
