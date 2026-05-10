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
  ArrowUpRight,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import ColorBends from '../components/ColorBends';
import profileImg from "./assets/about-me.jpeg"
import logoImg from "./assets/Jumao-as_ID.png"
import ibmCertImg from "./assets/IBM_Certificate.png"
import lifewoodImg from "./assets/Lifewood-Intern.jpeg"
import lifewood1Img from "./assets/lifewood (1).png"
import lifewood2Img from "./assets/lifewood (2).png"
import lifewood3Img from "./assets/lifewood (3).png"
import lifewoodSiteImg from "./assets/Lifewood-site.png"
import lifewoodSite2Img from "./assets/lifewood-site2.png"
import lifewoodSite3Img from "./assets/lifewood-site3.png"
import lifewoodSite4Img from "./assets/lifewood-site4.png"
import edumatchImg from "./assets/Edumatch.png"
import edumatch2Img from "./assets/edumatch2.png"
import edumatch3Img from "./assets/edumatch3.png"
import edumatch4Img from "./assets/edumatch4.png"
import edumatch5Img from "./assets/edumatch5.png"
import gamedev1Img from "./assets/gamedev1.png"
import gamedev2Img from "./assets/gamedev2.png"
import gamedev3Img from "./assets/gamedev3.png"
import gamedev4Img from "./assets/gamedev4.png"

const SKILLS = [
  {
    category: "Frontend Development",
    icon: <Globe className="w-5 h-5" />,
    items: ["HTML & CSS", "JavaScript", "React"]
  },
  {
    category: "Backend & Database",
    icon: <Database className="w-5 h-5" />,
    items: ["Supabase", "Vercel"]
  },
  {
    category: "Game & 3D Development",
    icon: <Layers className="w-5 h-5" />,
    items: ["Unreal Engine", "Unity"]
  },
  {
    category: "Version Control",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Diversion", "Git"]
  },
  {
    category: "AI & Generative Tools",
    icon: <Cpu className="w-5 h-5" />,
    items: ["AIGC", "AntiGravity", "Gamma", "Google AI Studio", "HeyGen", "LLMs", "NotebookLM"]
  },
  {
    category: "AI Development & Engineering",
    icon: <Terminal className="w-5 h-5" />,
    items: ["AI Code Assistants", "HIL (Human-in-the-Loop)", "Prompt Engineering"]
  }
];

const EXPERIENCE = [
  {
    role: "Website Developer Intern",
    company: "Lifewood Data Technology",
    period: "January 2026 - May 2026 (540 Hours)",
    description: "Designed user flows, developed websites and AI agents, crawled and compiled datasets, and tested internal systems to support and improve company operations.",
    tech: [],
    image: lifewoodImg
  },
];

const PROJECTS = [
{
    title: "EDUMATCH: A MACHINE LEARNING-BASED RECOMMENDATION SYSTEM FOR TERTIARY SCHOOL SELECTION",
    role: "Technical Writer | Front-End Designer",
    label: "Capstone Project",
    description: "EduMatch is an AI-powered recommendation system that helps students choose the right university based on their preferences such as budget, location, programs, and school type. It uses machine learning to provide personalized school suggestions and offers additional features like university profiles, comparisons, reviews, and chatbot support to make the decision-making process easier, more informed, and less stressful.",
    tech: [".NET core", "Python","GraphHopper API", "Gemini API", "TypeScript", "React", "Tailwind CSS", "shadcn/ui", "PostgreSQL"],
    link: "#",
    github: "https://github.com/dev-tabanag/edumatch",
    images: [edumatchImg, edumatch2Img, edumatch3Img, edumatch4Img, edumatch5Img]
  },
  {
    title: "LifePlan: AI Production Planning Agent",
    role: "Front-End Developer | UI/UX Designer",
    label: "Internship Project",
    description: "LifePlan is an AI-powered production planning agent that helps operators, admins, and team leads streamline scheduling and optimize capacity planning. By automating complex planning decisions, LifePlan reduces bottlenecks and keeps your production running efficiently — every shift, every time.",
    tech: ["React", "TypeScript", "MiniMax API", "Springboot", "Vercel"],
    link: "https://production-plan-agent.vercel.app",
    github: "https://github.com/ezzeljan/prodplan",
    images: [lifewood1Img, lifewood2Img, lifewood3Img]
  },
  {
    title: "Lifewood Website Imitation",
    role: "Full-stack Developer",
    label: "Internship Project",
    description: "An internship project focused on developing a full-stack web application that replicates a company website while integrating enhanced features for both users and administrators. The frontend presents key sections such as company information, services, projects, and career opportunities, delivering a clean and interactive user experience. The backend is supported by a structured admin management system that enables efficient control of content, user interactions, and system operations. Key features include managing inquiries, handling data processes, and maintaining platform performance, with additional support for role-based access, system monitoring, and streamlined administrative workflows.",
    tech: ["React", "TypeScript", "Supabase", "Vercel", "Gemini API"],
    link: "https://lifewood-website-zlwn.vercel.app",
    github: "https://github.com/DreyDein/lifewoodd",
    images: [lifewoodSiteImg, lifewoodSite2Img, lifewoodSite3Img, lifewoodSite4Img]
  },
  {
    title: "The Deliverance",
    role: "Level Designer",
    label: "Game Development Project",
    description: "The Deliverance is a first-person survival horror game for one or two players. You play as Sam and Dean, hunters from a secretive order tasked with investigating supernatural threats hidden from the rest of the world. Your first case takes you to Ashcroft Manor — an abandoned estate with a dark past. A woman was murdered here, her name erased and her story buried. Now her spirit haunts the halls, and she won't rest until the truth is uncovered. To end the haunting, you must explore the mansion, piece together scattered clues, and locate the cursed object binding her to the physical world. But the manor won't let you search in peace. Lights flicker. Shadows move. And something is always watching. Find the Anchor. Survive the Entity. Deliver it — before it delivers you.",
    tech: ["Unreal Engine", "C++", "Mixamo", "SketchFab"],
    link: "#",
    github: "#",
    images: [gamedev1Img, gamedev2Img, gamedev3Img, gamedev4Img]
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState<number[]>(PROJECTS.map(() => 0));
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const [showResumeViewer, setShowResumeViewer] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardImageIndices(prev =>
        prev.map((idx, i) => {
          const images = PROJECTS[i].images;
          return images ? (idx + 1) % images.length : 0;
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans scroll-smooth">
      <ColorBends
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10 }}
        colors={["#1a365d", "#2563eb", "#60a5fa", "#93c5fd"]}
        rotation={90}
        speed={0.15}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.5}
        noise={0.08}
        iterations={2}
        intensity={1.5}
        bandWidth={6}
        transparent={false}
      />
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-white shadow-sm" : "py-6 bg-transparent"
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
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-700 uppercase tracking-widest">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">About</a>
            <a href="#skills" onClick={scrollToSection('skills')} className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Skills</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Experience</a>
            <a href="#certificates" onClick={scrollToSection('certificates')} className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Certificates</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Projects</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px]">Contact</a>
          </div>

          <div className="relative">
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setShowResumeMenu(!showResumeMenu)}
              onBlur={() => setTimeout(() => setShowResumeMenu(false), 200)}
              className="px-5 py-2 bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-700 transition-all active:scale-95 shadow-sm shadow-indigo-200"
            >
              Resume
            </motion.button>
            {showResumeMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
                <button
                  onClick={() => { setShowResumeMenu(false); setShowResumeViewer(true); }}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors w-full text-left"
                >
                  <Globe className="w-4 h-4" />
                  View Resume
                </button>
                <a
                  href="/Resume_Dree.pdf"
                  download
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-t border-slate-100"
                  onClick={() => setShowResumeMenu(false)}
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden bg-white/80 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-indigo-600">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span>Available for opportunities</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter mb-8 text-slate-900">
                Hi, My name is <br /> 
                <span className="text-indigo-600">Andre Daniel Jumao-as.</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-800 leading-relaxed mb-4 font-medium">
                Front-end Developer | Web Designer | AI Practitioner
              </p>
              <p className="max-w-xl text-slate-700 leading-relaxed mb-10">
                I studied BSIT at UCLM, where I laid the foundation for my career in tech. I specialize in building visually stunning, 
                highly performant web applications that seamlessly blend modern design with intelligent AI solutions to solve complex problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects"
                  onClick={scrollToSection('projects')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs flex items-center group shadow-lg shadow-indigo-200"
                >
                  View Featured Projects
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="flex items-center space-x-4 ml-2">
                  <a href="https://github.com/DreyDein" className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 transition-colors shadow-sm">
                    <Github className="w-5 h-5 text-slate-700" />
                  </a>
                  <a href="https://www.linkedin.com/in/andre-daniel-jumao-as-2756ab3a8/" className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 transition-colors shadow-sm">
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
                    <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">Specialization</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white/80 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">Core Competencies</h2>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Technical Stack.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span key={item} className="px-3 py-1.5 bg-slate-100 text-slate-800 text-xs font-bold rounded-md">
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
      <section id="experience" className="py-32 bg-white/80 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">Professional Journey</h2>
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

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {exp.image && (
                    <div className="md:w-64 lg:w-80 flex-shrink-0 order-1 md:order-1">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-auto rounded-lg object-cover shadow-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1 order-2 md:order-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block">{exp.period}</span>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                    <p className="text-xl font-semibold text-slate-700 mb-6">{exp.company}</p>
                    <p className="text-lg text-slate-800 leading-relaxed max-w-2xl mb-8">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-widest rounded">
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

      {/* Certificates Section */}
      <section id="certificates" className="py-32 bg-white/80 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">Credentials</h2>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Certifications.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={ibmCertImg}
                alt="IBM Certificate"
                className="w-full h-auto rounded-lg object-contain cursor-pointer"
                onClick={() => setShowCertModal(true)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white/80 backdrop-blur-sm scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">Professional Portfolio</h2>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Selected Projects.</h2>
            </div>
            <p className="max-w-md text-slate-700">
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
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-slate-100 border border-slate-200 cursor-pointer" onClick={() => { setSelectedProject(project); setActiveImageIndex(0); }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={project.images ? cardImageIndices[index] : 0}
                      src={project.images[cardImageIndices[index]]}
                      alt={project.title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
                    <a href={project.github} className="p-3 bg-white rounded-lg hover:scale-110 transition-transform shadow-lg">
                      <Github className="w-5 h-5 text-indigo-600" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start justify-between cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {project.label && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                          {project.label}
                        </span>
                      )}
                      {project.role && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                          {project.role}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-800 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-700 text-sm mb-4 line-clamp-2 max-w-sm">
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
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest text-indigo-400 mb-2 font-bold">Social Handlers</p>
                  <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/andre-daniel-jumao-as-2756ab3a8/" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                    <a href="https://github.com/DreyDein" className="hover:text-indigo-400 transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            
            <footer className="pt-20 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                © 2026 Andre Daniel Jumao-as – Front-end Developer | Web Designer | AI Practitioner
              </div>
              <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest">
                <a href="#about" onClick={scrollToSection('about')} className="text-slate-500 hover:text-white transition-colors">About</a>
                <a href="#experience" onClick={scrollToSection('experience')} className="text-slate-500 hover:text-white transition-colors">Experience</a>
                <a href="#certificates" onClick={scrollToSection('certificates')} className="text-slate-500 hover:text-white transition-colors">Certificates</a>
                <a href="#projects" onClick={scrollToSection('projects')} className="text-slate-500 hover:text-white transition-colors">Projects</a>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.images && (
                <div className="relative md:w-3/5 min-h-48 md:min-h-0 bg-slate-100 flex items-center justify-center">
                  <img
                    src={selectedProject.images[activeImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  {selectedProject.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button
                        onClick={() => setActiveImageIndex((activeImageIndex - 1 + selectedProject.images!.length) % selectedProject.images!.length)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                      </button>
                      <button
                        onClick={() => setActiveImageIndex((activeImageIndex + 1) % selectedProject.images!.length)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === activeImageIndex ? "bg-indigo-600 w-4" : "bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => { setSelectedProject(null); setActiveImageIndex(0); }}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg hover:bg-white transition-colors shadow-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
              <div className="p-8 md:w-2/5 overflow-y-auto md:self-stretch">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {selectedProject.label && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      {selectedProject.label}
                    </span>
                  )}
                  {selectedProject.role && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {selectedProject.role}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{selectedProject.title}</h3>
                <p className="text-slate-800 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {showResumeViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowResumeViewer(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                <h3 className="font-bold text-slate-800">Resume</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/Resume_Dree.pdf"
                    download
                    className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                  <button
                    onClick={() => setShowResumeViewer(false)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>
              </div>
              <embed
                src="/Resume_Dree.pdf#toolbar=0"
                className="w-full h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Image Modal */}
      <AnimatePresence>
        {showCertModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCertModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCertModal(false)}
                className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 hover:bg-white rounded-lg shadow-sm transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
              <img
                src={ibmCertImg}
                alt="IBM Certificate"
                className="w-full h-auto object-contain p-4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
