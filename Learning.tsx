import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Layers, GitBranch, Globe } from 'lucide-react';

const learningItems = [
  {
    icon: BookOpen,
    title: 'Python Programming',
    description: 'Learning Python syntax, functions, and basic programming concepts.',
  },
  {
    icon: Layers,
    title: 'Data Structures Basics',
    description: 'Understanding lists, dictionaries, and other basic data structures.',
  },
  {
    icon: GitBranch,
    title: 'Git & GitHub',
    description: 'Learning how to track changes and share projects using Git and GitHub.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Exploring HTML, CSS, and how websites are built.',
  },
];

export default function Learning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            What I&apos;m Learning
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Topics I am currently studying to grow as a developer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {learningItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition-colors"
              >
                <div className="p-3 bg-emerald-500/10 rounded-lg w-fit mb-4">
                  <item.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
