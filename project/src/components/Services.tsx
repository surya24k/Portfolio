import React from 'react';
import { Palette, Code, Globe, Smartphone, FileCode, Zap, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Clean, modern interfaces for web & mobile apps with user-centered design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "from-pink-50 to-rose-50",
      price: "Starting at $299"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Front-End Development",
      description: "Functional, component-based development using ReactJS and modern JavaScript frameworks.",
      features: ["ReactJS Development", "Responsive Design", "Performance Optimization", "Modern ES6+"],
      color: "from-blue-500 via-indigo-500 to-purple-500",
      bgColor: "from-blue-50 to-indigo-50",
      price: "Starting at $399"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "CMS Web Design",
      description: "Dynamic and no-code websites using Webflow for easy content management.",
      features: ["Webflow Development", "Content Management", "SEO Optimization", "Custom Interactions"],
      color: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "from-green-50 to-emerald-50",
      price: "Starting at $499"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Responsive Web Design",
      description: "Pixel-perfect layouts optimized for all devices and screen sizes.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "Touch Optimization", "Progressive Enhancement"],
      color: "from-purple-500 via-violet-500 to-indigo-500",
      bgColor: "from-purple-50 to-violet-50",
      price: "Starting at $349"
    },
    {
      icon: <FileCode className="w-10 h-10" />,
      title: "Prototype to Code",
      description: "Convert high-fidelity Figma or XD designs into fully functional web pages.",
      features: ["Design System Implementation", "Pixel-Perfect Conversion", "Interactive Components", "Clean Code Structure"],
      color: "from-orange-500 via-red-500 to-pink-500",
      bgColor: "from-orange-50 to-red-50",
      price: "Starting at $249"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Optimization",
      description: "Optimize websites for speed, accessibility, and search engine performance.",
      features: ["Speed Optimization", "Accessibility Compliance", "SEO Best Practices", "Core Web Vitals"],
      color: "from-yellow-500 via-orange-500 to-red-500",
      bgColor: "from-yellow-50 to-orange-50",
      price: "Starting at $199"
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Discovery", 
      description: "Understanding your needs and project requirements",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      step: "02", 
      title: "Design", 
      description: "Creating wireframes, prototypes, and visual designs",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    { 
      step: "03", 
      title: "Development", 
      description: "Building responsive, functional web applications",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    { 
      step: "04", 
      title: "Delivery", 
      description: "Testing, optimization, and project handover",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text mb-6">
            Services
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive design and development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
              
              <div className={`relative bg-gradient-to-br ${service.bgColor} backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl transform group-hover:scale-105 transition-all duration-500 h-full`}>
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                </div>
                
                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 group/item">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm font-medium group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <button className={`w-full py-4 bg-gradient-to-r ${service.color} text-white font-bold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group/btn`}>
                  <span className="mr-2">Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text mb-6">My Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A systematic approach to deliver exceptional results from concept to completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="group relative">
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                    <span className="relative z-10">{process.step}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${process.color} rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 bg-gradient-to-r ${process.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {process.icon}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;