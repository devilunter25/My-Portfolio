import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Download, User, MapPin, Briefcase, Zap } from 'lucide-react';

const iconmapping = {
  "Name": <User size={18} className="text-cyan-400 mr-3" />,
  "Focus": <Zap size={18} className="text-cyan-400 mr-3" />,
  "Specialization": <Zap size={18} className="text-cyan-400 mr-3" />,
  "Location": <MapPin size={18} className="text-cyan-400 mr-3" />,
  "Availability": <Briefcase size={18} className="text-cyan-400 mr-3" />
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Animated Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-5/12"
          >
            <div className="relative group perspective-1000">
              <motion.div 
                 animate={{ rotateZ: 360 }} 
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" 
              />
              <div className="relative aspect-square rounded-[2rem] bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm overflow-hidden flex items-center justify-center transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-500 shadow-2xl z-10 p-2">
                <img 
                  src="/raj_pic.jpeg" 
                  alt="Raj Humraskar" 
                  className="w-full h-full object-cover rounded-[1.75rem]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback if image fails to load */}
                <div className="hidden text-slate-500 flex-col items-center justify-center absolute inset-0">
                   <div className="relative">
                      <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-md animate-pulse"></div>
                      <User size={80} className="text-slate-400 mb-4 relative z-10 opacity-50" />
                   </div>
                   <span className="font-mono text-sm tracking-widest text-slate-400 uppercase">AI Developer</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white mb-6">
              Engineering the Future with Data & Algorithms.
            </h3>
            <p className="text-slate-300/80 text-lg leading-relaxed mb-10 border-l-4 border-fuchsia-500/50 pl-6">
              {portfolioData.about.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {portfolioData.about.details.map((detail, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  key={idx} 
                  className="flex items-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/30 hover:bg-slate-800 transition-colors"
                >
                  {iconmapping[detail.label] || <MapPin size={18} className="text-cyan-400 mr-3" />}
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{detail.label}</span>
                    <span className="text-slate-200 font-medium">{detail.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <a 
                href="/Raj%20CV.pdf"
                download="Raj_Humraskar_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 group"
              >
                <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
