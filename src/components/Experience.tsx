import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Oneyes InfoTech Solutions",
      period: "Feb 2025 - Apr 2025",
      location: "Chennai, India",
      achievements: [
        "Designed and implemented UI for a pharmacy billing system, improving efficiency by 30%",
        "Designed UI prototypes and wireframes for a pharmacy billing management system using Figma",
        "Translated design mockups into responsive web pages using HTML and CSS",
        "Participated in client reviews and incorporated feedback to enhance usability and consistency",
        "Improved understanding of component-based design and design-to-code workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and key contributions in web development and UI/UX design
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-600"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right md:ml-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                  <div className="flex items-center gap-2 mb-3 text-blue-600 md:justify-end">
                    <Calendar size={18} />
                    <span className="font-semibold">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-3">{exp.company}</h4>
                  
                  <div className="flex items-center gap-2 mb-4 text-slate-500 md:justify-end">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-slate-600 md:flex-row-reverse md:text-right">
                        <TrendingUp size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </div>
                    ))}
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

export default Experience;