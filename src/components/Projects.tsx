import React from 'react';
import { ExternalLink, Github, Zap, Users, Database, Smartphone, FileCode } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pharmacy Billing System Website",
      description: "A comprehensive web application for managing pharmacy billing, inventory, and patient data with improved operational efficiency.",
      role: "Web Developer & UI/UX Designer",
      technologies: ["Figma", "HTML", "CSS", "JavaScript"],
      features: [
        "Designed and developed a fully functional website to manage pharmacy operations",
        "Created interactive UI/UX wireframes using Figma",
        "Implemented responsive front-end using HTML, CSS, and JavaScript",
        "Integrated medicine stock tracking, patient data entry, and automated invoice generation",
        "Resulted in improved operational efficiency by 30%"
      ],
      impact: "30% improvement in operational efficiency",
      icon: <Database className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Project Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing my hands-on experience in developing real-world applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{project.role}</p>
                      <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Impact:</span>
                      <span className="text-green-700">{project.impact}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                      <FileCode className="w-5 h-5 text-purple-600" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white text-slate-700 px-3 py-2 rounded-lg text-sm font-medium border border-slate-200 hover:border-blue-300 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                      <ExternalLink size={18} />
                      View Project
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition-colors duration-200 shadow-lg hover:shadow-xl">
                      <Github size={18} />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;