import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-400 mb-4 md:mb-0">&copy; 2024 Maha Gasm Elsid. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
              <Linkedin size={24} />
            </a>
            <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
              <FileText size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;