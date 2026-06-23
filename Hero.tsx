import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-emerald-400 font-medium mb-4">Hello, I am</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Krishna Biswal
          </h1>
          <h2 className="text-xl sm:text-2xl text-slate-400 mb-8">
            Beginner Python Developer
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Hi, I&apos;m Krishna Biswal. I am a student currently learning Python and
            software development. I enjoy building small projects and improving my
            programming skills every day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleScroll('#projects')}
              className="w-full sm:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowDown size={18} />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="w-full sm:w-auto px-8 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Contact Me
              <Mail size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
