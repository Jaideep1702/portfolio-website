"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp, Twitter } from "lucide-react";

// Hashnode icon component
const HashnodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 28 28" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      fill="currentColor" 
      fillRule="evenodd" 
      d="M1.923 9.357a6.567 6.567 0 0 0 0 9.287l7.434 7.433a6.567 6.567 0 0 0 9.287 0l7.433-7.434a6.567 6.567 0 0 0 0-9.286l-7.434-7.434a6.567 6.567 0 0 0-9.286 0L1.923 9.357ZM14 18.598a4.598 4.598 0 1 0 0-9.196 4.598 4.598 0 0 0 0 9.196Z" 
      clipRule="evenodd"
    />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>

        <div className="grid md:grid-cols-3 gap-8 items-center mt-8">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Jaideep Jambhale
            </h3>
            <p className="text-gray-400 text-sm">
              Software Engineer | Full Stack Developer
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://github.com/Jaideep1702"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 glass rounded-full hover:bg-purple-500/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-purple-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jaideepjambhale"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 glass rounded-full hover:bg-blue-500/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </motion.a>
            <motion.a
              href="https://x.com/JaideepJambhale"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 glass rounded-full hover:bg-sky-500/20 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5 text-sky-400" />
            </motion.a>
            <motion.a
              href="https://hashnode.com/@Jaideep17"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 glass rounded-full hover:bg-indigo-500/20 transition-colors"
              aria-label="Hashnode"
            >
              <HashnodeIcon className="w-5 h-5 text-indigo-400" />
            </motion.a>
            <motion.a
              href="mailto:jaideep.jambhale@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 glass rounded-full hover:bg-pink-500/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-pink-400" />
            </motion.a>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Jaideep Jambhale. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

