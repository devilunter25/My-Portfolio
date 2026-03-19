import { Link } from 'react-scroll';
import { portfolioData } from '../data';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link to="home" smooth={true} duration={500} className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 cursor-pointer mb-2">
              &lt;/&gt;
            </Link>
            <p className="text-slate-500 text-sm font-medium tracking-wide">
              &copy; {currentYear} Raj Humraskar. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href="mailto:hello@rajhumraskar.ml" className="text-slate-500 hover:text-cyan-400 transform hover:scale-110 transition-all">
              <Mail size={20} />
            </a>
            {portfolioData.socials.map((social, idx) => {
              const Icon = social.icon === 'github' ? Github : 
                           social.icon === 'linkedin' ? Linkedin : Twitter;
              return (
                <a 
                  key={idx} 
                  href={social.url} 
                  className="text-slate-500 hover:text-fuchsia-400 transform hover:scale-110 transition-all"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
