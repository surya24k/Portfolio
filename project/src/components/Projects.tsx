import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Zap, Smartphone, X, Star, Code, Palette } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "EHE – Event Management System",
      subtitle: "Real-time Wedding Planning Application",
      description: "A comprehensive web application tailored for seamless wedding planning and event coordination.",
      longDescription: "EHE is a real-time web application designed to revolutionize wedding planning and event coordination. Inspired by the German word 'EHE' meaning 'married state,' the app unifies all wedding planning services into one digital solution. The platform provides a clean, role-based responsive UI for organizers, guests, and vendors, ensuring each user type has a tailored experience.",
      role: "UI/UX Designer & Front-End Developer",
      tools: ["Figma", "HTML5", "CSS3", "JavaScript", "ReactJS"],
      features: [
        "Clean, role-based responsive UI (organizer, guest, vendor)",
        "Real-time updates with live notifications",
        "Task scheduling and management system",
        "Guest RSVP system with automated responses",
        "Vendor management and booking system",
        "Interactive calendar view with event timeline"
      ],
      image: "https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "from-pink-50 to-rose-50",
      icon: <Calendar className="w-8 h-8" />,
      rating: 5
    },
    {
      id: 2,
      title: "IPEYU – Smart Payment & Travel App",
      subtitle: "Comprehensive Payment & Travel Booking Platform",
      description: "A comprehensive web application combining payment management, travel booking, and dashboard services.",
      longDescription: "IPEYU is a sophisticated web application developed during my internship at Heterophyllus Technologies. This comprehensive platform seamlessly integrates payment management, travel booking services, and intuitive dashboard interfaces. The project challenged me to convert complex Figma prototypes into functional, responsive front-end components while maintaining design fidelity.",
      role: "Front-End Developer & Design Integrator",
      tools: ["HTML", "CSS", "JavaScript", "ReactJS", "Figma", "Webflow"],
      features: [
        "Converted complex Figma prototypes to functional components",
        "Integrated travel booking UI (flight, bus, train)",
        "Card-based and carousel view implementations",
        "Mobile-first, interactive dashboards",
        "Cross-platform performance optimization",
        "Lightweight animations and transitions for enhanced UX"
      ],
      image: "https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 via-indigo-500 to-purple-500",
      bgColor: "from-blue-50 to-indigo-50",
      icon: <Smartphone className="w-8 h-8" />,
      rating: 5
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-80 object-cover rounded-t-3xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-300 shadow-lg"
          >
            <X size={24} />
          </button>
          <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t ${project.color} opacity-90`}></div>
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl mr-4">
                {project.icon}
              </div>
              <div className="flex">
                {[...Array(project.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
            <p className="text-white/90 text-xl">{project.subtitle}</p>
          </div>
        </div>
        
        <div className="p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="mr-3 text-blue-600" />
                Project Overview
              </h4>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">{project.longDescription}</p>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                  <span className="font-bold text-gray-900 text-lg">Role: </span>
                  <span className="text-gray-700 text-lg">{project.role}</span>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl border border-gray-200">
                  <span className="font-bold text-gray-900 text-lg mb-3 block">Technologies Used:</span>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, index) => (
                      <span key={index} className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Palette className="mr-3 text-purple-600" />
                Key Features
              </h4>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className={`w-3 h-3 bg-gradient-to-r ${project.color} rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                    <span className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex gap-6 mt-10 pt-8 border-t border-gray-200">
            <button className={`flex items-center px-8 py-4 bg-gradient-to-r ${project.color} text-white rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold`}>
              <ExternalLink className="mr-3" size={22} />
              View Live Demo
            </button>
            <button className="flex items-center px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
              <Github className="mr-3" size={22} />
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in UI/UX design and front-end development through real-world projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                    <div className="text-white">
                  </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-6 right-6 flex">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-200 font-semibold mb-4 text-lg">{project.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">{project.description}</p>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <span className="text-sm font-bold text-blue-200 uppercase tracking-wide block mb-2">Role</span>
                      <p className="text-white font-semibold">{project.role}</p>
                    </div>
                    
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <span className="text-sm font-bold text-purple-200 uppercase tracking-wide block mb-3">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.slice(0, 4).map((tool, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold border border-white/30">
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold border border-white/30">
                            +{project.tools.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;