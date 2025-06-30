import React from 'react';

// Sample projects data
const projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: 'Python, Html, Css, Bootstrap, MySQL',
    github: 'https://github.com/Vishnuvsh/Ecommerce',
    demo: 'https://github.com/Vishnuvsh/Ecommerce'
  },
  {
    id: 2,
    name: ' Clinical Management System',
image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: 'Python, React, Tailwind Css, MySQL',
    github: 'https://github.com/Vishnuvsh',
    demo: 'https://github.com/Vishnuvsh'
  },
  {
    id: 3,
    name: 'Customer Relationship Management',
    image: 'https://plus.unsplash.com/premium_photo-1733328013343-e5ee77acaf05?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: 'Python, React, Javascript, MySQL',
    github: 'https://github.com/Vishnuvsh',
    demo: 'https://github.com/Vishnuvsh'
  },
  {
    id: 4,
    name: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: 'React, Tailwind Css, Css',
    github: 'https://github.com/Vishnuvsh',
    demo: 'https://github.com/Vishnuvsh'
  },
  {
    id: 5,
    name: 'Movies CRUD',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: 'Python, Html, Css, MySQL',
    github: 'https://github.com/Vishnuvsh/CRUD_Movie_List',
    demo: 'https://github.com/Vishnuvsh/CRUD_Movie_List.git'
  },
  {
    id: 6,
    name: 'Blog Application',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: 'Python, Django, Html, Css, Javascript',
    github: 'https://github.com/Vishnuvsh',
    demo: 'https://github.com/Vishnuvsh'
  }
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-[#005C97] to-[#363795] py-20" id="project">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {project.technologies}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-3">{project.name}</h3>
                <p className="text-gray-100 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-medium flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">#{project.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;