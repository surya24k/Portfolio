import React from 'react';
import { Heart, Github, Linkedin, Instagram, Mail, Phone, MapPin, Sparkles, Code, Palette } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    { name: 'UI/UX Design', icon: <Palette className="w-4 h-4" /> },
    { name: 'Front-End Development', icon: <Code className="w-4 h-4" /> },
    { name: 'CMS Web Design', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Responsive Design', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Prototype to Code', icon: <Code className="w-4 h-4" /> },
    { name: 'Performance Optimization', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: "https://github.com/surya24k",
      name: "GitHub",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800"
    },
    {
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/suryakumar-m",
      name: "LinkedIn",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    {
      icon: <Instagram size={24} />,
      url: "https://instagram.com/iam.surya._",
      name: "Instagram",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-400 hover:to-purple-500"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: "suryakmarmurugesan2003@gmail.com",
      link: "mailto:suryakmarmurugesan2003@gmail.com"
    },
    {
      icon: <Phone size={18} />,
      text: "+91 6382671842",
      link: "tel:+916382671842"
    },
    {
      icon: <MapPin size={18} />,
      text: "Palladam, Tirupur, Tamil Nadu",
      link: "#"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-black text-2xl">SM</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                    Suryakumar
                  </div>
                  <div className="text-sm text-gray-400 font-semibold">Front-End Designer</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              Passionate Front-End Web Designer and UI/UX Designer creating digital experiences 
              that are both functional and visually engaging.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group/social p-3 bg-gradient-to-r ${social.color} rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-300 ${social.hoverColor}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-lg"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <div className="mr-3 text-purple-400 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start text-gray-400 hover:text-white transition-all duration-300">
                  <div className="mr-3 mt-1 text-green-400 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <a 
                    href={info.link}
                    className="hover:text-white transition-colors duration-300 leading-relaxed"
                  >
                    {info.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-lg">
                © 2025 Suryakumar M. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Designed and developed with passion in Tamil Nadu, India
              </p>
            </div>
            
            <div className="flex items-center text-gray-400 text-lg">
              <span>Built with</span>
              <Heart size={20} className="mx-2 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
          
          {/* Additional Bottom Info */}
          <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="mr-2 text-yellow-400" size={20} />
              <span className="text-gray-300 font-semibold">
                Available for freelance projects and collaborations
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;