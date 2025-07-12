import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, XCircle, MessageSquare, Clock, Award } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_ngiqvrl',
        'template_whq3iv5',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Suryakumar M'
        },
        'c6WUlDQD_6pYc6XkL'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email",
      value: "suryakmarmurugesan2003@gmail.com",
      link: "mailto:suryakmarmurugesan2003@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Phone",
      value: "+91 6382671842",
      link: "tel:+916382671842",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Location",
      value: "Palladam, Tirupur, Tamil Nadu, India",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-7 h-7" />,
      name: "GitHub",
      url: "https://github.com/surya24k",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800"
    },
    {
      icon: <Linkedin className="w-7 h-7" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/suryakumar-m",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    {
      icon: <Instagram className="w-7 h-7" />,
      name: "Instagram",
      url: "https://instagram.com/iam.surya._",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-400 hover:to-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text mb-6">
            Get In Touch
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mr-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">Send a Message</h3>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-green-500/20 border border-green-400/50 rounded-2xl flex items-center text-green-200 backdrop-blur-sm">
                  <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                  <span className="font-semibold">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-red-500/20 border border-red-400/50 rounded-2xl flex items-center text-red-200 backdrop-blur-sm">
                  <XCircle className="mr-3 flex-shrink-0" size={24} />
                  <span className="font-semibold">Failed to send message. Please try again or contact me directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group/input">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-200 mb-3 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400 group-hover/input:bg-white/20"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="group/input">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-200 mb-3 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400 group-hover/input:bg-white/20"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="group/input">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-200 mb-3 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-400 group-hover/input:bg-white/20"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3" size={22} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500`}></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="flex items-center">
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-2xl text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-gray-300 hover:text-white transition-colors text-lg"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="mr-3 text-yellow-400" />
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`group/social p-4 bg-gradient-to-r ${social.color} rounded-2xl text-white shadow-lg transform hover:scale-110 transition-all duration-300 ${social.hoverColor}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-3xl p-8 border border-green-400/30 shadow-2xl">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Quick Response</h3>
                </div>
                <p className="text-green-100 leading-relaxed text-lg">
                  I typically respond to messages within <span className="font-bold text-green-300">24 hours</span>. 
                  For urgent projects, feel free to call me directly for immediate assistance.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-orange-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/30 shadow-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Great</h3>
                <p className="text-orange-100 leading-relaxed text-lg">
                  I'm always excited to work on new projects and collaborate with creative minds. 
                  Whether you need a complete website redesign, a new application, or just want to discuss ideas, 
                  I'm here to help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;