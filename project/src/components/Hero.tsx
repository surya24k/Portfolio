import React from 'react';
import { Download, Eye, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Suryakumar Front-end Web Developer & Designer Resume (2).pdf';
    link.download = 'Suryakumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = async () => {
    try {
      await emailjs.send(
        'service_ngiqvrl',
        'template_whq3iv5',
        {
          from_name: 'Website Visitor',
          from_email: 'visitor@website.com',
          message: 'A visitor clicked the "Hire Me" button on your portfolio website. They are interested in your services and would like to discuss potential opportunities.',
          to_name: 'Suryakumar M'
        },
        'c6WUlDQD_6pYc6XkL'
      );
      alert('Thank you for your interest! Suryakumar will get back to you soon.');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please contact directly via email or phone.');
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/25 to-blue-600/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rotate-12 animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              {/* Fresher Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                    ✨ FRESHER
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full blur opacity-50 animate-pulse"></div>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text leading-tight tracking-tight" 
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Suryakumar M
              </h1>

              {/* Title */}
              <div className="relative">
                <p className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mt-4" 
                   style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Front-End Web Designing, UI/UX Designing, CMS Designing
                </p>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-lg rounded-lg"></div>
              </div>

              {/* Tagline */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl font-medium">
                "Designing Interfaces. Building Experiences."
              </p>
            </div>

            {/* Bio Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                <p className="text-gray-200 leading-relaxed text-lg">
                  I'm a passionate Front-End Web Designer and UI/UX Designer specializing in responsive, 
                  user-centric interfaces using Figma, Webflow, HTML, CSS, JavaScript, and ReactJS. 
                  With a growing foundation in both design and development, I bring creativity and technical 
                  precision to every project, making digital experiences both functional and visually engaging.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={handleHireMe}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white font-bold rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="mr-3 relative z-10" size={22} />
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>

              <button 
                onClick={handleDownloadResume}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="mr-3 relative z-10" size={22} />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>

              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-2xl border border-white/30 overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Eye className="mr-3 relative z-10" size={22} />
                <span className="relative z-10">View Projects</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-8">
              <span className="text-gray-300 font-semibold text-lg">Connect with me:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/surya24k" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <Github size={28} className="relative z-10" />
                </a>
                <a 
                  href="https://linkedin.com/in/suryakumar-m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <Linkedin size={28} className="relative z-10" />
                </a>
                <a 
                  href="https://instagram.com/iam.surya._" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <Instagram size={28} className="relative z-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Circle */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp delay-300">
            <div className="relative group">
              {/* Main Circle */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center">
                  <span className="text-8xl lg:text-9xl font-black text-white drop-shadow-2xl">SM</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-70 animate-pulse group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-70 animate-pulse delay-1000 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-lg opacity-60 animate-pulse delay-500 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;