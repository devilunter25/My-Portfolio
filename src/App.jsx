import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// A dynamic background component using framer-motion shapes
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none bg-slate-950">
      {/* Dynamic Network-like Nodes */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-900/10 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -150, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-900/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.1, 0.7, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-2/3 left-1/2 w-[300px] h-[300px] rounded-full bg-indigo-900/10 blur-[90px]"
      />
      
      {/* Grid overlay for a 'digital/cyber' feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgNDBMMDAgNDBoNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] object-cover opacity-50 z-[-15]"></div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
