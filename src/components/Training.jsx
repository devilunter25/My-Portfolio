import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { FaGraduationCap } from 'react-icons/fa';

const Training = () => {
  return (
    <section id="training" className="py-20 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Training & <span className="text-cyan-400">Experience</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {portfolioData.training.map((item, index) => (
            <motion.a
              href={item.url || '#'}
              target={item.url && item.url !== '#' ? "_blank" : "_self"}
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] w-full flex flex-col md:flex-row gap-6 md:items-center cursor-pointer group/training"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-cyan-400 shadow-inner">
                  <FaGraduationCap size={28} />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover/training:text-cyan-400 transition-colors">{item.title}</h3>
                    <h4 className="text-cyan-400 font-medium text-lg">{item.issuer}</h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-fuchsia-500/10 text-fuchsia-400 rounded-full text-sm font-bold uppercase tracking-wider border border-fuchsia-500/20 whitespace-nowrap self-start">
                    {item.date}
                  </span>
                </div>
                
                <p className="text-slate-400 text-base leading-relaxed mt-4 border-l-2 border-slate-700 pl-4">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
