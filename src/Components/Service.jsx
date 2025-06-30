import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs that captivate your audience and enhance user experience.",
    icon: "🖌️",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive, interactive interfaces with React, Next.js, and modern CSS frameworks.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing secure, scalable server architectures with Node.js, Express, and database solutions.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "Full-Stack Solutions",
    description: "End-to-end development from concept to deployment with optimized performance.",
    icon: "🚀",
  },
];

const Service = () => {
  return (
    <div className="bg-gradient-to-r from-[#005C97] to-[#363795] py-20 px-4" id="service">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-300">Services</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="text-4xl mb-6 text-blue-400 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white hover:from-blue-600 hover:to-blue-700 transition-all">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;