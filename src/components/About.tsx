import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, GitBranch, Lightbulb, Rocket } from 'lucide-react';

const aboutItems = [
  {
    icon: GraduationCap,
    text: 'I am a student who is learning programming and exploring technology.',
  },
  {
    icon: Code2,
    text: 'Learning Python and writing my first real programs.',
  },
  {
    icon: GitBranch,
    text: 'Learning Git & GitHub to manage and share my code.',
  },
  {
    icon: Lightbulb,
    text: 'Interested in Web Development and how websites work.',
  },
  {
    icon: Rocket,
    text: 'Building beginner projects to practice and improve.',
  },
  {
    icon: Code2,
    text: 'Improving my problem-solving skills one step at a time.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            About Me
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            I am a student who is learning programming and exploring technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-emerald-500/30 transition-colors"
              >
                <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                  <item.icon className="text-emerald-400" size={22} />
                </div>
                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
