import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      year: "2025",
      description: "Comprehensive understanding of cloud computing fundamentals, AWS core services, and cloud architecture principles.",
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "MongoDB Basics for Students",
      issuer: "MongoDB University",
      year: "2025",
      description: "Foundational knowledge of NoSQL databases, MongoDB operations, and database design principles.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`bg-gradient-to-br ${cert.color} p-3 rounded-lg shadow-lg`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 mb-3">
                    <span className="font-semibold">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">{cert.description}</p>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    <ExternalLink size={16} />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
              I believe in staying updated with the latest technologies and industry best practices. 
              These certifications represent my commitment to professional growth and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;