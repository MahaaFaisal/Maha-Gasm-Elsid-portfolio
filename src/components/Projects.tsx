import React from 'react';
import { FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Level Business Performance Monitoring Dashboard for Startups",
      description: "Graduation project focused on creating a comprehensive dashboard for startup performance monitoring.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "3D Printer Project",
      description: "Contributed to the development of a 3D printer that builds 3-dimensional objects.",
      technologies: ["3D Modeling", "Electronics", "Mechanical Engineering"],
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <FolderGit2 className="mr-2" /> Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-green-700 text-green-100 px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;