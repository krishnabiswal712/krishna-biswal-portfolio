import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Calculator App',
    description: 'A simple calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division.',
    tech: ['Python'],
    github: '#',
  },
  {
    name: 'To-Do List App',
    description: 'A beginner-friendly to-do list application to add, view, and remove daily tasks.',
    tech: ['Python'],
    github: '#',
  },
  {
    name: 'Password Generator',
    description: 'A small program that generates random and secure passwords.',
    tech: ['Python'],
    github: '#',
  },
  {
    name: 'Quiz App',
    description: 'A text-based quiz game with multiple-choice questions.',
    tech: ['Python'],
    github: '#',
  },
  {
    name: 'Expense Tracker',
    description: 'A simple tool to track daily expenses and see totals.',
    tech: ['Python'],
    github: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Projects
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Small projects I have built while learning Python.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-emerald-500/30 transition-colors flex flex-col"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                  <ExternalLink size={14} className="opacity-70" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
