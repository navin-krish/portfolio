import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              NK
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Navin Krishna K S
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Web Developer & UI/UX Designer
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Versatile UI/UX and Web Developer with strong skills in front-end technologies and design tools. 
              Experienced in creating responsive, visually appealing, and user-friendly interfaces across web and mobile platforms.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:navinkrish2084@gmail.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://github.com/navin-krish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/navin-krish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
             <a
              href="https://drive.google.com/file/d/1aE-wujFnf0fsUIflCzzevwPq6bfHKQZt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              Download resume
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 8122452084</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Tambaram, Chennai-601301</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>navinkrish2084@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
