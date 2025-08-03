import React from 'react';
import { Code, Palette, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Front-End Development",
      description: "Proficient in HTML, CSS, JavaScript, and React for building responsive web applications"
    },
    {
      icon: <Palette className="w-8 h-8 text-teal-600" />,
      title: "UI/UX Design",
      description: "Expert in Figma for creating wireframes, prototypes, and user-centered design solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in agile development environments"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Problem Solving",
      description: "Analytical mindset with strong debugging skills and attention to detail"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer and UI/UX designer with a focus on creating 
            exceptional digital experiences. My expertise lies in translating design concepts 
            into functional, high-performance web applications with emphasis on usability and accessibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;