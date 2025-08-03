import React from 'react';
import { Code2, Palette, Database, Globe, Users, Lightbulb, MessageSquare, FileCode } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 90, icon: <Code2 className="w-5 h-5" /> },
    { name: "CSS", level: 85, icon: <Palette className="w-5 h-5" /> },
    { name: "JavaScript", level: 80, icon: <FileCode className="w-5 h-5" /> },
    { name: "Java", level: 75, icon: <Code2 className="w-5 h-5" /> },
    { name: "React", level: 70, icon: <Globe className="w-5 h-5" /> },
    { name: "Figma", level: 85, icon: <Palette className="w-5 h-5" /> },
    { name: "Firebase", level: 70, icon: <Database className="w-5 h-5" /> },
    { name: "REST API", level: 65, icon: <Globe className="w-5 h-5" /> }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Lightbulb className="w-6 h-6 text-orange-600" /> },
    { name: "Team Collaboration", icon: <Users className="w-6 h-6 text-blue-600" /> },
    { name: "Communication", icon: <MessageSquare className="w-6 h-6 text-green-600" /> },
    { name: "Agile Methodology", icon: <Users className="w-6 h-6 text-purple-600" /> }
  ];

  const tools = [
    "VS Code", "GitHub", "Figma", "Responsive Design", "Wireframing", "Prototyping"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-blue-600" />
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">{skill.icon}</div>
                      <span className="font-semibold text-slate-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-teal-600" />
                Soft Skills
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-medium text-slate-800">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <FileCode className="w-8 h-8 text-purple-600" />
                Tools & Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;