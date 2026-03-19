import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code, Layers, Wrench, BrainCircuit, Terminal, Activity, Database, GitBranch, Binary, Globe } from 'lucide-react';
import { FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiC, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras, SiJupyter, SiGooglecolab, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Category map
const categoryIconMap = {
  "Languages": <Code className="text-cyan-400 group-hover:text-white transition-colors" size={24} />,
  "Frameworks & Libraries": <Layers className="text-cyan-400 group-hover:text-white transition-colors" size={24} />,
  "Tools & Platforms": <Wrench className="text-cyan-400 group-hover:text-white transition-colors" size={24} />,
  "Core ML Skills": <BrainCircuit className="text-cyan-400 group-hover:text-white transition-colors" size={24} />
};

// Exact Brand or Semantic Icon mapping for individual skills
const getSkillIcon = (skillName) => {
  const norm = skillName.toLowerCase();
  
  // Languages
  if (norm === 'python') return <FaPython className="text-blue-400" size={16} />;
  if (norm === 'java') return <FaJava className="text-red-400" size={16} />;
  if (norm === 'c++') return <SiCplusplus className="text-blue-500" size={16} />;
  if (norm === 'c') return <SiC className="text-blue-600" size={16} />;
  
  // Frameworks
  if (norm.includes('numpy')) return <SiNumpy className="text-blue-300" size={16} />;
  if (norm.includes('pandas')) return <SiPandas className="text-purple-400" size={16} />;
  if (norm.includes('scikit')) return <SiScikitlearn className="text-orange-400" size={16} />;
  if (norm.includes('tensorflow')) return <SiTensorflow className="text-orange-500" size={16} />;
  if (norm.includes('keras')) return <SiKeras className="text-red-500" size={16} />;
  if (norm.includes('matplotlib')) return <Activity className="text-green-400" size={16} />;
  if (norm.includes('seaborn')) return <Globe className="text-blue-400" size={16} />; // Proxy

  // Tools
  if (norm.includes('jupyter')) return <SiJupyter className="text-orange-400" size={16} />;
  if (norm.includes('colab')) return <SiGooglecolab className="text-yellow-500" size={16} />;
  if (norm.includes('code') || norm.includes('vs')) return <VscVscode className="text-blue-500" size={16} />;
  if (norm.includes('git')) return <FaGithub className="text-white" size={16} />;
  if (norm.includes('sql')) return <Database className="text-cyan-400" size={16} />;

  // ML 
  if (norm.includes('regression')) return <Activity className="text-fuchsia-400" size={16} />;
  if (norm.includes('deep learning')) return <BrainCircuit className="text-fuchsia-500" size={16} />;
  if (norm.includes('data')) return <Binary className="text-emerald-400" size={16} />;

  // Default fallback
  return <Terminal className="text-slate-400" size={16} />;
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-cyan-400">Toolkit</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none transition-all group-hover:from-fuchsia-500/10" />
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-slate-900/60 flex items-center justify-center mr-5 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all shadow-inner border border-slate-700 group-hover:border-cyan-500/30">
                  {categoryIconMap[category.title]}
                </div>
                <h3 className="text-2xl font-bold text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-400 transition-all">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {category.skills.map((skill, idx) => (
                  <motion.span 
                    whileHover={{ scale: 1.05, y: -2 }}
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 text-cyan-100 border border-slate-700 group-hover:border-slate-600 hover:!border-fuchsia-500 rounded-lg text-sm font-medium hover:text-white transition-all hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] cursor-default"
                  >
                    {getSkillIcon(skill)}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
