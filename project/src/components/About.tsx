import React from 'react';
import { GraduationCap, Code, Palette, Globe, Smartphone, Database, Sparkles, Award, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.E. Computer Science",
      institution: "Hindusthan College of Engineering and Technology",
      period: "2022–2025",
      score: "CGPA: 8.24",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      degree: "Diploma in EEE",
      institution: "P.A.C.R Polytechnic College",
      period: "2019–2022",
      score: "Score: 91.36%",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      degree: "SSLC",
      institution: "Blue Bird Matric Hr. Sec School",
      period: "2018–2019",
      score: "Score: 69.6%",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const skills = [
    {
      category: "Languages & Front-End",
      icon: <Code className="w-7 h-7" />,
      tools: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Java"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      category: "UI/UX Tools",
      icon: <Palette className="w-7 h-7" />,
      tools: ["Figma", "Adobe XD", "Photoshop", "Canva", "Illustrator"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      category: "CMS & Dev Tools",
      icon: <Globe className="w-7 h-7" />,
      tools: ["Webflow", "GitHub", "Cursor", "VS Code", "AI-powered tools"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text mb-6">
            About Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that bridge creativity and functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Background */}
          <div className="space-y-10">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mr-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text">
                    My Journey
                  </h3>
                </div>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    My journey began with a foundation in <span className="font-semibold text-blue-600">Electrical & Electronics Engineering</span>, where I developed 
                    a keen eye for systematic thinking and problem-solving. This technical background naturally 
                    evolved into a passion for <span className="font-semibold text-purple-600">Computer Science and UI/UX design</span>.
                  </p>
                  <p>
                    Today, I specialize in creating digital experiences that are not only visually appealing but 
                    also highly functional and user-centered. My transition from engineering to design has given 
                    me a unique perspective on bridging the gap between <span className="font-semibold text-green-600">technical feasibility and creative vision</span>.
                  </p>
                  <p>
                    Currently expanding my expertise into <span className="font-semibold text-pink-600">Adobe Illustrator, Adobe XD, and Photoshop</span> to support 
                    future graphic and UI/UX design needs, I'm committed to staying at the forefront of design 
                    and development trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white mr-4">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="group/card relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl blur opacity-20 group-hover/card:opacity-40 transition duration-500`}></div>
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/60 transform group-hover/card:scale-105 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-3">
                              <div className={`p-2 bg-gradient-to-r ${edu.color} rounded-xl text-white mr-3`}>
                                {edu.icon}
                              </div>
                              <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                            </div>
                            <p className="text-gray-700 font-semibold mb-2">{edu.institution}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 font-medium">{edu.period}</span>
                              <span className={`bg-gradient-to-r ${edu.color} bg-clip-text text-transparent font-bold text-lg`}>
                                {edu.score}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Technologies */}
          <div className="space-y-10">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white mr-4">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text">
                    Tools & Technologies
                  </h3>
                </div>
                <div className="space-y-8">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="group/skill relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillGroup.color} rounded-2xl blur opacity-20 group-hover/skill:opacity-40 transition duration-500`}></div>
                      <div className={`relative bg-gradient-to-br ${skillGroup.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/60 transform group-hover/skill:scale-105 transition-all duration-300`}>
                        <div className="flex items-center mb-6">
                          <div className={`p-3 bg-gradient-to-r ${skillGroup.color} rounded-2xl text-white mr-4 transform group-hover/skill:rotate-12 transition-transform duration-300`}>
                            {skillGroup.icon}
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900">{skillGroup.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {skillGroup.tools.map((tool, toolIndex) => (
                            <span 
                              key={toolIndex}
                              className={`px-4 py-2 bg-gradient-to-r ${skillGroup.color} text-white text-sm font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl text-white mb-6">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text mb-4">
                    What Drives Me
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I believe in creating digital experiences that not only look beautiful but also solve real problems. 
                    Every project is an opportunity to learn, grow, and push the boundaries of what's possible in web design and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;