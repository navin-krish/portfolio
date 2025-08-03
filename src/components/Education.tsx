import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BE - Computer Science and Engineering",
      institution: "Dhanalakshmi College of Engineering",
      period: "2025 - 2027",
      cgpa: "8.62 / 10",
      achievements: [
        "No history of arrear",
        "Academic Honors for 6 consecutive semesters",
        "Consistent academic excellence"
      ]
    },
    {
      degree: "Higher Secondary (Class 12)",
      institution: "Tiaano Vidyashrm (CBSE)",
      period: "2022",
      cgpa: "70%",
      achievements: [
        "Best student awardee",
        "Outstanding academic performance"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Academic Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My educational background and academic achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-3">{edu.institution}</h4>
                      <div className="flex items-center gap-4 text-slate-500">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">CGPA/Percentage</span>
                    </div>
                    <div className="text-2xl font-bold text-green-700">{edu.cgpa}</div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-slate-700 flex items-center gap-2">
                      <Award className="w-4 h-4 text-orange-600" />
                      Achievements
                    </h5>
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-slate-600 text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {achievement}
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

export default Education;