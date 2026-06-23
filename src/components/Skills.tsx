import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Python', level: 'Learning' },
  { name: 'HTML', level: 'Learning' },
  { name: 'CSS', level: 'Learning' },
  { name: 'Git', level: 'Learning' },
  { name: 'GitHub', level: 'Learning' },
  { name: 'VS Code', level: 'Learning' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Skills
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I am currently learning.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-5 bg-slate-900 border border-slate-800 rounded-xl text-center hover:border-emerald-500/40 hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-1">
                  {skill.name}
                </h3>
                <p className="text-sm text-emerald-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
