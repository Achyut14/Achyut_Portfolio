

import React from 'react';
import { FaJsSquare, FaReact, FaPython, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare size={40} /> },
    { name: 'React', icon: <FaReact size={40} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
    { name: 'Python', icon: <FaPython size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
    { name: 'SQL', icon: <SiMysql size={40} /> },
    { name: 'Database', icon: <FaDatabase size={40} /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-10 pt-20 text-center"
      style={{
        backgroundImage: `url('/PortCode.jpg')`, // Path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dynamic overlay: dark for dark mode, light gray for light mode */}
      <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70 bg-white dark:bg-black"></div>

      {/* Content */}
      <div className="relative z-10 text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110"
            >
              <div>{skill.icon}</div>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
