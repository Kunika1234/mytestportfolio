import React, { useState, useEffect } from 'react';
import { Download, Github, Instagram, Linkedin, Mail, Phone, Code, Database, Server, Globe, Terminal, Award, User, Briefcase, ExternalLink, ChevronDown, Menu, X, Send } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [smsForm, setSmsForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['home', 'about', 'certifications', 'skills', 'projects', 'mini-projects', 'contact'];
      const scrollPos = scrollPosition + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleSmsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle SMS form submission here
    console.log('SMS Form submitted:', smsForm);
    alert('Message sent successfully!');
    setSmsForm({ name: '', phone: '', message: '' });
  };

  const certifications = [
    "Cloud Computing Abstract (BICON 2021)",
    "BICON 2022, 2023 participation", 
    "Honeywell Cloud Program (2024)",
    "Microsoft Python + Excel certifications",
    "Edureka Data Science Workshop",
    "IP Awareness Program (2022)"
  ];

  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "Linux", level: 85 },
    { name: "C", level: 80 },
    { name: "C++", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "Microsoft Office", level: 85 },
    { name: "AWS", level: 70 }
  ];

  const projects = [
    {
      title: "🚀 DevOps Project 1 - Automated CI/CD Pipeline in Action!",
      description: "Built a fully automated CI/CD pipeline using Git Bash, GitHub, and Jenkins. Set up Jenkins job with 1-minute polling trigger, automated Docker image building, container management, and Docker Hub deployment. Achieved end-to-end automation without manual intervention.",
      skills: ["Jenkins", "Docker", "Git", "GitHub", "CI/CD", "Automation"],
      highlight: true
    },
    {
      title: "🐳 DockerFlow - Streamlit Container Manager",
      description: "Revolutionary Docker management interface built with Streamlit. Allows users to execute all Docker commands remotely through a web interface by connecting via IP address and password authentication. Simplifies container orchestration with an intuitive dashboard.",
      skills: ["Docker", "Streamlit", "Python", "Web Interface", "Container Management"],
      highlight: false
    },
    {
      title: "✈️ Smart Travel Itinerary Generator",
      description: "AI-powered travel planning application built with Gradio in Jupyter notebook using Python. Generates personalized travel itineraries based on user preferences, budget, and destination. Features intelligent recommendations and interactive planning interface.",
      skills: ["Python", "Gradio", "Jupyter", "AI/ML", "Data Processing"],
      highlight: false
    },
    {
      title: "🐧 Linux Command Center",
      description: "Comprehensive Linux command execution platform built on Streamlit dashboard. Provides a user-friendly interface to run Linux commands remotely, with real-time output display and command history tracking.",
      skills: ["Linux", "Streamlit", "Python", "System Administration", "Dashboard"],
      highlight: false
    },
    {
      title: "🚀 Multi-Domain Project Hub",
      description: "Centralized dashboard showcasing projects across different technology domains. Features organized tabs for Linux, Python, Docker, and JavaScript projects. Built with Streamlit for seamless navigation and project demonstration.",
      skills: ["Streamlit", "Python", "Multi-domain", "Dashboard", "Project Management"],
      highlight: false
    }
  ];

  const miniProjects = [
    { name: "PyMailer", description: "Send emails programmatically using Python with SMTP integration" },
    { name: "SMS Sender", description: "Text messaging automation through Python API integration" },
    { name: "Call Connect", description: "Voice call automation using Python telecommunications libraries" },
    { name: "WhatsApp Bot", description: "Automated WhatsApp messaging system built with Python" },
    { name: "Insta Poster", description: "Instagram post automation using Python social media APIs" },
    { name: "Linux Blog", description: "Technical blog explaining enterprise Linux adoption and benefits" },
    { name: "Icon Modifier", description: "Linux application icon and logo customization tool" },
    { name: "Terminal Messenger", description: "Multi-platform messaging through Linux command line interface" },
    { name: "Docker Runner", description: "Containerized application deployment and management system" }
  ];

  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">Kunika</span>
              <span className="text-[#38bdf8] ml-1">.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {[
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About' },
                { id: 'certifications', name: 'Certifications' },
                { id: 'skills', name: 'Skills' },
                { id: 'projects', name: 'Projects' },
                { id: 'mini-projects', name: 'Mini Projects' },
                { id: 'contact', name: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#38bdf8] ${
                    activeSection === item.id ? 'text-[#38bdf8]' : 'text-slate-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 px-6 py-3 border border-[#38bdf8] text-[#38bdf8] rounded hover:bg-[#38bdf8]/10 transition-all duration-200 text-sm">
                <Download size={16} />
                <span>Resume</span>
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6">
              <div className="flex flex-col space-y-4">
                {[
                  { id: 'home', name: 'Home' },
                  { id: 'about', name: 'About' },
                  { id: 'certifications', name: 'Certifications' },
                  { id: 'skills', name: 'Skills' },
                  { id: 'projects', name: 'Projects' },
                  { id: 'mini-projects', name: 'Mini Projects' },
                  { id: 'contact', name: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors duration-200 hover:text-[#38bdf8] ${
                      activeSection === item.id ? 'text-[#38bdf8]' : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button className="flex items-center space-x-2 px-6 py-3 border border-[#38bdf8] text-[#38bdf8] rounded hover:bg-[#38bdf8]/10 transition-all duration-200 w-fit text-sm">
                  <Download size={16} />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <p className="text-[#38bdf8] text-lg mb-6">Hi, my name is</p>
              <h1 className="text-white text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-pulse">
                <span className="bg-gradient-to-r from-[#f89bf1] via-[#38bdf8] to-[#d5e9ea] bg-clip-text text-transparent">
                  Kunika Prajapat
                </span>
              </h1>
              <h2 className="text-slate-400 text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                MCA Student & Developer
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mb-12 leading-relaxed">
                I'm a MCA student specializing in Computer Science & Applications at Vivekananda Global University. 
                Currently focused on building exceptional digital experiences through DevOps, cloud computing, and web development.
              </p>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border border-[#38bdf8] text-[#38bdf8] rounded hover:bg-[#38bdf8]/10 transition-all duration-200"
              >
                Check out my work!
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-[#b3cfd8] relative overflow-hidden group shadow-2xl shadow-[#fedeacb]/30">
                  <img 
                    src="/WhatsApp Image 2025-07-12 at 11.05.03 copy.jpeg" 
                    alt="Kunika Prajapat" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#38bdf8]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="absolute top-6 left-6 w-80 h-80 border-4 border-[#d29c8a]/30 rounded-full -z-10"></div>
                <div className="absolute top-12 left-12 w-80 h-80 border-2 border-[#fedeacb]/20 rounded-full -z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <h2 className="text-white text-4xl font-bold mr-6 hover:bg-gradient-to-r hover:from-[#f89bf1] hover:to-[#38bdf8] hover:bg-clip-text hover:text-transparent transition-all duration-300">
              About Me
            </h2>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm Kunika Prajapat, currently pursuing MCA (Master of Computer Applications) at 
                <span className="text-[#38bdf8]"> Vivekananda Global University</span>. My journey in technology 
                began at Tagore Public School, Jaipur, where I completed my schooling with 70% in both 10th and 12th CBSE boards.
              </p>
              <p>
                I completed my BCA (Bachelor's of Computer Science and Application) with 74%, building a strong 
                foundation in computer science principles. My passion for technology drives me to explore various 
                domains including DevOps, cloud computing, and web development.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {["Python", "JavaScript", "Linux", "Docker", "Jenkins", "SQL"].map((tech) => (
                  <div key={tech} className="flex items-center">
                    <span className="text-[#38bdf8] mr-3">▹</span>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                <h3 className="text-[#38bdf8] text-xl font-semibold mb-6">Education</h3>
                <div className="space-y-4 text-slate-400">
                  <div className="flex justify-between">
                    <span>MCA - Computer Science & Applications</span>
                    <span className="text-[#38bdf8]">Pursuing</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BCA</span>
                    <span className="text-[#38bdf8]">74%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12th CBSE</span>
                    <span className="text-[#38bdf8]">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>10th CBSE</span>
                    <span className="text-[#38bdf8]">70%</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                <h3 className="text-[#38bdf8] text-xl font-semibold mb-6">Contact Info</h3>
                <div className="space-y-3 text-slate-400 text-sm">
                  <div>
                    <span className="text-[#38bdf8]">Email:</span> kunikaprajapat1026@gmail.com
                  </div>
                  <div>
                    <span className="text-[#38bdf8]">Phone:</span> 8003535828
                  </div>
                  <div>
                    <span className="text-[#38bdf8]">School:</span> Tagore Public School, Jaipur
                  </div>
                  <div>
                    <span className="text-[#38bdf8]">College:</span> Vivekananda Global University
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mt-16 text-center">
            <h3 className="text-white text-2xl font-semibold mb-8">Hobbies</h3>
            <div className="flex justify-center space-x-16">
              <div className="flex items-center space-x-4 text-[#38bdf8]">
                <span className="text-3xl">💃</span>
                <span className="text-lg">Dancing</span>
              </div>
              <div className="flex items-center space-x-4 text-[#38bdf8]">
                <span className="text-3xl">👩‍🍳</span>
                <span className="text-lg">Cooking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <h2 className="text-white text-4xl font-bold mr-6 hover:bg-gradient-to-r hover:from-[#f89bf1] hover:to-[#38bdf8] hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Certifications
            </h2>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg border border-[#d5e9ea]/30 hover:border-[#38bdf8]/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <Award className="text-[#f89bf1]" size={28} />
                  <span className="text-[#38bdf8] font-semibold">Certificate</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <h2 className="text-white text-4xl font-bold mr-6 hover:bg-gradient-to-r hover:from-[#f89bf1] hover:to-[#38bdf8] hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Technical Skills
            </h2>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          <div className="bg-slate-800/50 p-12 rounded-lg border border-slate-700 mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-[#38bdf8] text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#f89bf1] to-[#38bdf8] h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-white text-3xl font-semibold mb-12">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {["Communication", "Teamwork", "Leadership", "Problem Solving", "Quick Learner"].map((skill, index) => (
                <span key={index} className="px-6 py-3 bg-slate-800/50 border border-[#d5e9ea]/30 rounded-lg text-slate-300 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <h2 className="text-white text-4xl font-bold mr-6 hover:bg-gradient-to-r hover:from-[#f89bf1] hover:to-[#38bdf8] hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Some Things I've Built
            </h2>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 shadow-xl">
                    <p className="text-[#38bdf8] text-sm mb-3">Featured Project</p>
                    <h3 className="text-white text-2xl font-bold mb-6">{project.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-slate-400 text-sm bg-slate-700/50 px-3 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-6">
                      <Github size={24} className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors duration-200" />
                      <ExternalLink size={24} className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors duration-200" />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-[#f89bf1]/20 to-[#38bdf8]/20 h-80 rounded-lg flex items-center justify-center border border-[#38bdf8]/30">
                    <Code size={64} className="text-[#38bdf8]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Projects Section */}
      <section id="mini-projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <h2 className="text-white text-4xl font-bold mr-6 hover:bg-gradient-to-r hover:from-[#f89bf1] hover:to-[#38bdf8] hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Other Noteworthy Projects
            </h2>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniProjects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-[#38bdf8]/50 transition-all duration-300 group hover:transform hover:scale-105 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-lg flex items-center justify-center">
                    <Code size={24} className="text-[#38bdf8]" />
                  </div>
                  <div className="flex space-x-3">
                    <Github size={20} className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors duration-200" />
                    <ExternalLink size={20} className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors duration-200" />
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                
                {/* Hover tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {project.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-white text-4xl font-bold mr-6 hover:bg-gradient-to-r hover:from-[#f89bf1] hover:to-[#38bdf8] hover:bg-clip-text hover:text-transparent transition-all duration-300">
              What's Next?
            </h2>
          </div>

          <h2 className="text-white text-5xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 leading-relaxed text-center">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
            {/* Contact Information */}
            <div className="bg-slate-800/50 p-10 rounded-lg border border-slate-700">
              <h3 className="text-[#38bdf8] text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:kunikaprajapat1026@gmail.com" className="flex items-center space-x-4 text-slate-400 hover:text-[#38bdf8] hover:scale-105 transition-all duration-300">
                  <Mail size={24} />
                  <span>kunikaprajapat1026@gmail.com</span>
                </a>
                <a href="tel:8003535828" className="flex items-center space-x-4 text-slate-400 hover:text-[#38bdf8] hover:scale-105 transition-all duration-300">
                  <Phone size={24} />
                  <span>8003535828</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/50 p-10 rounded-lg border border-slate-700">
              <h3 className="text-[#38bdf8] text-2xl font-semibold mb-8">Social Media</h3>
              <div className="space-y-6">
                <a href="https://github.com/Kunika1234/Kunika-Prajapat-" className="flex items-center space-x-4 text-slate-400 hover:text-[#38bdf8] hover:scale-105 transition-all duration-300">
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kunika-prajapat-486a06311" className="flex items-center space-x-4 text-slate-400 hover:text-[#38bdf8] hover:scale-105 transition-all duration-300">
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://instagram.com/kunika_prajapat_0726" className="flex items-center space-x-4 text-slate-400 hover:text-[#38bdf8] hover:scale-105 transition-all duration-300">
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* SMS Form */}
            <div className="bg-slate-800/50 p-10 rounded-lg border border-slate-700">
              <h3 className="text-[#38bdf8] text-2xl font-semibold mb-8">Send SMS</h3>
              <form onSubmit={handleSmsSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={smsForm.name}
                  onChange={(e) => setSmsForm({...smsForm, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#38bdf8] focus:outline-none transition-colors duration-200"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={smsForm.phone}
                  onChange={(e) => setSmsForm({...smsForm, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#38bdf8] focus:outline-none transition-colors duration-200"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={smsForm.message}
                  onChange={(e) => setSmsForm({...smsForm, message: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#38bdf8] focus:outline-none transition-colors duration-200 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#38bdf8] text-white rounded-lg hover:bg-[#38bdf8]/80 transition-all duration-200"
                >
                  <Send size={18} />
                  <span>Send SMS</span>
                </button>
              </form>
            </div>
          </div>

          <div className="text-center">
            <button className="px-10 py-4 border border-[#38bdf8] text-[#38bdf8] rounded hover:bg-[#38bdf8]/10 transition-all duration-200 text-lg">
              Say Hello
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 border-t border-slate-700">
        <p className="text-sm">Built by Kunika Prajapat</p>
      </footer>
    </div>
  );
}

export default App;