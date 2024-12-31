import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/Achyut14" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/achyut-dahal/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:achyutdahal14@gmail.com" className="text-white hover:text-gray-400">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="mt-2 text-gray-400">&copy; {new Date().getFullYear()} Achyut Dahal</p>
    </footer>
  );
};

export default Footer;
