import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-fuchsia-500">Touch</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8 relative z-10"
          >
            <div>
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-2">Let's talk about everything!</h3>
              <p className="text-slate-400 text-lg">Don't like forms? Send me an email directly. I'm actively looking for new opportunities.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-900 flex justify-center items-center rounded-lg text-cyan-400 group-hover:text-fuchsia-400 transition-colors shadow-inner mr-4 border border-slate-800">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-white font-medium text-lg">Humraskarraj@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-900 flex justify-center items-center rounded-lg text-cyan-400 group-hover:text-fuchsia-400 transition-colors shadow-inner mr-4 border border-slate-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-white font-medium text-lg">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6 relative z-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-slate-300 ml-1">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-slate-900/80 text-white placeholder-slate-500 border border-slate-700/50 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all font-medium"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-slate-300 ml-1">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-slate-900/80 text-white placeholder-slate-500 border border-slate-700/50 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-medium"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col space-y-1 relative">
              <label htmlFor="message" className="text-sm font-semibold text-slate-300 ml-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="bg-slate-900/80 text-white placeholder-slate-500 border border-slate-700/50 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all font-medium resize-none"
                placeholder="How can we help each other?"
              />
            </div>

            <button 
              type="button" 
              className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white font-bold text-lg py-4 rounded-xl flex justify-center items-center shadow-lg shadow-fuchsia-500/20 transform transition-all hover:-translate-y-1 active:scale-95 group"
            >
              Send Message
              <Send className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
