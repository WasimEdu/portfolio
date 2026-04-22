import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, Code, Mail, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const sections = [
  { id: 'about', label: 'About Me', icon: User, color: 'bg-amber-100' },
  { id: 'projects', label: 'Projects', icon: Briefcase, color: 'bg-blue-100' },
  { id: 'skills', label: 'Skills', icon: Code, color: 'bg-emerald-100' },
  { id: 'contact', label: 'Contact', icon: Mail, color: 'bg-rose-100' },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack shopping solution with real-time inventory.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Portfolio Template",
    description: "A sleek, folder-style portfolio for developers.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Task Manager",
    description: "Productivity app with drag-and-drop features.",
    tech: ["TypeScript", "React", "Firebase"],
    link: "#"
  }
];

const skills = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "Next.js", "PostgreSQL", "Git", "Docker", "AWS"
];

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center justify-center p-4 font-sans text-stone-800">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 mb-2">WASIM AKHTAR</h1>
        <p className="text-stone-600 uppercase tracking-widest text-sm">Software Engineer & Creative Developer</p>
      </header>

      <main className="w-full max-w-4xl relative">
        {/* Cabinet Tabs */}
        <div className="flex flex-wrap gap-1 items-end px-4 relative z-10">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`
                relative px-6 py-3 rounded-t-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium
                ${activeTab === section.id
                  ? `${section.color} -translate-y-1 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-20`
                  : 'bg-stone-300 hover:bg-stone-400 text-stone-600 hover:-translate-y-0.5 z-0'}
              `}
            >
              <section.icon className="w-4 h-4" />
              {section.label}
              {activeTab === section.id && (
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-inherit translate-y-full" />
              )}
            </button>
          ))}
        </div>

        {/* Cabinet Drawer */}
        <div className={`
          relative w-full min-h-[500px] rounded-2xl shadow-2xl overflow-hidden border-8 border-stone-400
          ${sections.find(s => s.id === activeTab)?.color}
        `}>
          {/* Metal Handle Decoration */}
          <div className="absolute top-4 right-8 w-24 h-2 bg-stone-400/30 rounded-full" />

          <div className="p-8 md:p-12 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {activeTab === 'about' && (
                  <div className="space-y-6 max-w-2xl">
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <p className="text-lg leading-relaxed text-stone-700">
                      Hello! I'm Wasim, a passionate software engineer based in Bengaluru. I specialize in building
                      high-performance web applications using modern technologies.
                    </p>
                    <p className="text-lg leading-relaxed text-stone-700">
                      With a strong foundation in computer science and a keen eye for design, I enjoy turning complex
                      problems into simple, beautiful, and intuitive solutions.
                    </p>
                    <div className="pt-4 flex gap-4">
                      <a href="#" className="p-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href="#" className="p-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href="#" className="p-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Featured Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects.map((project, i) => (
                        <div key={i} className="bg-white/50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow group">
                          <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                          <p className="text-stone-600 text-sm mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map(t => (
                              <span key={t} className="text-[10px] bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded font-bold uppercase">{t}</span>
                            ))}
                          </div>
                          <a href={project.link} className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
                            View Project <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Technical Arsenal</h2>
                    <div className="flex flex-wrap gap-4">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          className="bg-emerald-500/10 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-emerald-500/20 transition-colors cursor-default"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          {skill}
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 p-6 bg-white/30 rounded-xl border border-emerald-200">
                      <h4 className="font-bold mb-2 uppercase text-sm tracking-widest text-emerald-800">Current Focus</h4>
                      <p className="text-stone-700 italic">Deepening expertise in Distributed Systems and UI/UX Motion Design.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="max-w-xl space-y-8">
                    <h2 className="text-3xl font-bold">Get In Touch</h2>
                    <p className="text-stone-700">
                      I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                      I'll try my best to get back to you!
                    </p>
                    <div className="space-y-4">
                      <a href="mailto:wasim@example.com" className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors border border-rose-200">
                        <div className="bg-rose-500 p-3 rounded-lg text-white">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-stone-500">Email Me</p>
                          <p className="font-medium">wasim@example.com</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-stone-500 text-sm">
        © {new Date().getFullYear()} Wasim Akhtar. Built with React 19 & Tailwind CSS 4.
      </footer>
    </div>
  );
}
