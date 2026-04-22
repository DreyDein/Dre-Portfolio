/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  Cpu, 
  Globe,
  ChevronRight,
  Download,
  FileCode,
  Layout,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import profileImg from "./assets/about-me.jpg"
import logoImg from "./assets/Jumao-as_ID.png"

const SKILLS = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"]
  },
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS", "Docker", "Git", "Vercel", "CI/CD"]
  }
];

const EXPERIENCE = [
  {
    role: "Front-end Developer",
    company: "TechPulse Solutions",
    period: "2024 - Present",
    description: "Leading the development of responsive web interfaces using React and Tailwind CSS. Implementing AI-driven features to enhance user engagement.",
    tech: ["React", "TypeScript", "Tailwind", "Gemini API"]
  },
  {
    role: "Junior Web Designer",
    company: "Creative Flow Studio",
    period: "2023 - 2024",
    description: "Designed and developed custom WordPress themes and high-fidelity prototypes for international clients.",
    tech: ["Figma", "Webflow", "JavaScript", "PHP"]
  },
  {
    role: "AI Implementation Intern",
    company: "Neural Systems Corp",
    period: "2022 - 2023",
    description: "Assisted in the integration of LLMs into customer support workflows and data visualization dashboards.",
    tech: ["Python", "TensorFlow", "React", "D3.js"]
  }
];

const PROJECTS = [
  {
    title: "CloudInventory AI",
    description: "An AI-powered inventory management system with real-time stock tracking and predictive demand forecasting.",
    tech: ["Next.js", "PostgreSQL", "OpenAI API", "AWS"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/inventory/800/600"
  },
  {
    title: "EcoTrack API",
    description: "A RESTful API for monitoring environmental data from IoT sensors, featuring high-performance data ingestion.",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/sensor/800/600"
  },
  {
    title: "DeFi Dashboard",
    description: "A minimalist dashboard for tracking decentralized finance assets across multiple blockchain networks.",
    tech: ["React", "Ethers.js", "Tailwind", "Chart.js"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/crypto/800/600"
  },
  {
    title: "GitLab Automate",
    description: "Custom CI/CD pipelines and scripts to automate deployment workflows for microservices architecture.",
    tech: ["Bash", "Python", "GitLab CI", "Linux"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/devops/800/600"
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <BackgroundAnimation />
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 glass shadow-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-bold text-lg md:text-xl tracking-tight uppercase text-slate-800">Andre Daniel Jumao-as</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Contact</a>
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-5 py-2 bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-700 transition-all active:scale-95 shadow-sm shadow-indigo-200"
          >
            Resume
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-indigo-600">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span>Available for opportunities</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter mb-8 text-slate-900">
                Hi, My name is <br /> 
                <span className="text-indigo-600">Andre Daniel Jumao-as.</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-600 leading-relaxed mb-4 font-medium">
                Front-end Developer | Web Designer | AI Practitioner
              </p>
              <p className="max-w-xl text-slate-500 leading-relaxed mb-10">
                I studied BSIT at UCLM, where I laid the foundation for my career in tech. I specialize in building visually stunning, 
                highly performant web applications that seamlessly blend modern design with intelligent AI solutions to solve complex problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs flex items-center group shadow-lg shadow-indigo-200"
                >
                  View Featured Projects
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="flex items-center space-x-4 ml-2">
                  <a href="#" className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 transition-colors shadow-sm">
                    <Github className="w-5 h-5 text-slate-700" />
                  </a>
                  <a href="#" className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 transition-colors shadow-sm">
                    <Linkedin className="w-5 h-5 text-slate-700" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <div className="relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-square max-w-md mx-auto"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-indigo-600"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-indigo-600"></div>
                
                <img 
                  src={profileImg}
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-xl"
                />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-4 bg-white p-6 shadow-2xl rounded-2xl border border-slate-100 hidden xl:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 flex items-center justify-center text-white rounded-xl">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Smart Interfaces</h4>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Specialization</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-slate-100/20 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Core Competencies</h2>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Technical Stack.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.category}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-slate-800">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Professional Journey</h2>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Work Experience.</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 pb-20 last:pb-0 group"
              >
                {/* Timeline Line */}
                <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-slate-100 group-last:hidden"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-indigo-600 bg-white z-10 transition-transform group-hover:scale-125"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <p className="text-lg font-semibold text-slate-500 mb-4">{exp.company}</p>
                    <p className="text-slate-600 leading-relaxed max-w-2xl mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Professional Portfolio</h2>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Selected Projects.</h2>
            </div>
            <p className="max-w-md text-slate-500">
              Honors graduate showcase featuring scalable architectures, automated pipelines, and cloud-native developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-slate-100 border border-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
                    <a href={project.github} className="p-3 bg-white rounded-lg hover:scale-110 transition-transform shadow-lg">
                      <Github className="w-5 h-5 text-indigo-600" />
                    </a>
                    <a href={project.link} className="p-3 bg-white rounded-lg hover:scale-110 transition-transform shadow-lg">
                      <ExternalLink className="w-5 h-5 text-indigo-600" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-800 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 max-w-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600 opacity-[0.05] -skew-x-12 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-6 font-display">Communication Channel</h2>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-12">
              Let's Connect. <br />
              <span className="text-slate-500">Available for innovative roles.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-8">
                <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest text-indigo-400 mb-2 font-bold">Email Interface</p>
                  <a href="mailto:jumaoasandre2003@gmail.com" className="text-2xl font-medium border-b border-transparent hover:border-indigo-400 transition-all text-slate-200">
                    jumaoasandre2003@gmail.com
                  </a>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest text-indigo-400 mb-2 font-bold">Phone Number</p>
                  <a href="tel:09179516740" className="text-2xl font-medium border-b border-transparent hover:border-indigo-400 transition-all text-slate-200">
                    09179516740
                  </a>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest text-indigo-400 mb-2 font-bold">Social Handlers</p>
                  <div className="flex space-x-6">
                    <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
                    <a href="#" className="hover:text-indigo-400 transition-colors">Digital CV</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <form className="space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Identity</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-slate-700 pb-2 focus:border-indigo-400 outline-none transition-colors text-sm"
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Gateway</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-slate-700 pb-2 focus:border-indigo-400 outline-none transition-colors text-sm"
                      placeholder="Email Address" 
                    />
                  </div>
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-indigo-700 transition-colors mt-4 shadow-lg shadow-indigo-500/20">
                    Execute Connection
                  </button>
                </form>
              </div>
            </div>
            
            <footer className="pt-20 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                © 2026 Andre Daniel Jumao-as – Front-end Developer | Web Designer | AI Practitioner
              </div>
              <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest">
                <a href="#about" className="text-slate-500 hover:text-white transition-colors">About</a>
                <a href="#experience" className="text-slate-500 hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="text-slate-500 hover:text-white transition-colors">Projects</a>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
