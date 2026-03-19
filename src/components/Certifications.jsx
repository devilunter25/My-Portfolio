import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900/40 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Licenses & <span className="text-cyan-400">Certifications</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-700 ml-3 md:ml-0 md:pl-0">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 ml-8 md:ml-0 md:flex md:justify-between md:items-center w-full md:odd:flex-row-reverse group"
              >
                {/* Timeline Dot */}
                <div className="absolute w-10 h-10 bg-slate-800 rounded-full border-4 border-slate-900 -left-[21px] md:left-1/2 md:-ml-5 flex items-center justify-center group-hover:bg-cyan-500 transition-colors z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <Award className="text-slate-400 group-hover:text-white" size={16} />
                </div>

                {/* Content Card */}
                <div className="md:w-5/12 bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] relative">
                    {/* Arrow pointing to timeline */}
                    <div className="hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent md:group-odd:-right-4 md:group-odd:border-l-8 md:group-odd:border-l-slate-800 md:group-even:-left-4 md:group-even:border-r-8 md:group-even:border-r-slate-800 transition-colors group-hover:md:group-odd:border-l-cyan-500/50 group-hover:md:group-even:border-r-cyan-500/50"></div>
                    
                    <span className="inline-block px-3 py-1 bg-fuchsia-500/10 text-fuchsia-400 rounded-full text-xs font-bold mb-3 border border-fuchsia-500/20">
                      {cert.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">{cert.title}</h3>
                    
                    <div className="flex items-center text-slate-400 text-sm font-medium">
                       <ShieldCheck size={16} className="mr-2 text-slate-500" />
                       {cert.issuer}
                    </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
