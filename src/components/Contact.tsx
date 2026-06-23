import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Contact
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out if you want to connect or collaborate.
          </p>

          <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl text-center">
            <div className="p-4 bg-emerald-500/10 rounded-full w-fit mx-auto mb-6">
              <MessageCircle className="text-emerald-400" size={32} />
            </div>

            <p className="text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
              I am currently learning programming and looking for opportunities to
              learn, collaborate, and build useful projects.
            </p>

            <a
              href="mailto:krishnabiswal712@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              <Mail size={20} />
              krishnabiswal712@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
