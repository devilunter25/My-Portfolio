import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-medium tracking-wide mb-4"
        >
          WELCOME TO MY WORLD
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">{portfolioData.hero.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-slate-400 mb-8"
        >
          A <span className="text-slate-200">{portfolioData.hero.titles[0]}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-400 max-w-2xl mb-10"
        >
          {portfolioData.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4 mb-12"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            View Work
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-semibold transition-all border border-slate-700 hover:border-slate-600"
          >
            About Me
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center space-x-6 z-20 relative"
        >
          {portfolioData.socials.map((social, idx) => {
            const Icon = social.icon === 'github' ? Github : 
                         social.icon === 'linkedin' ? Linkedin : Twitter;
            return (
              <a 
                key={idx} 
                href={social.url} 
                className="text-slate-400 hover:text-cyan-400 transform hover:scale-110 hover:-translate-y-1 transition-all"
                target="_blank" 
                rel="noreferrer"
              >
                <Icon size={28} />
              </a>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
