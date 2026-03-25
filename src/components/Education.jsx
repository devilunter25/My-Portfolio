import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { GraduationCap, Building } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950">
      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & <span className="text-cyan-400">Academics</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {portfolioData.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-fuchsia-500/50 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(217,70,239,0.15)] w-full flex flex-col md:flex-row gap-6 md:items-center"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-fuchsia-400 shadow-inner">
                  <GraduationCap size={28} />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">{item.degree}</h3>
                    <div className="flex items-center text-slate-300 font-medium text-lg mt-1 mb-2">
                      <Building size={18} className="mr-2 text-slate-400" />
                      {item.institution}
                    </div>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-bold uppercase tracking-wider border border-cyan-500/20 whitespace-nowrap self-start">
                    {item.date}
                  </span>
                </div>
                
                <p className="text-slate-400 text-base leading-relaxed mt-4 border-l-2 border-slate-700 pl-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
