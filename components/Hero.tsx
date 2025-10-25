"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

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

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(() => [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ], []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Jaideep</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 h-16 md:h-20"
            variants={itemVariants}
          >
            <span className="text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
          </motion.h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Passionate about{" "}
          <span className="text-blue-400 font-semibold">
            understanding business needs
          </span>{" "}
          and delivering{" "}
          <span className="text-purple-400 font-semibold">
            end-to-end solutions
          </span>
          . Skilled at owning responsibilities, driving timely releases, and
          exploring emerging technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-slate-800/30 transition-all duration-300"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://linkedin.com/in/jaideepjambhale"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-blue-500/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-blue-400" />
          </motion.a>
          <motion.a
            href="https://github.com/Jaideep1702"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-purple-500/20 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-purple-400" />
          </motion.a>
          <motion.a
            href="https://x.com/JaideepJambhale"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-sky-500/20 transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter className="w-6 h-6 text-sky-400" />
          </motion.a>
          <motion.a
            href="https://hashnode.com/@Jaideep17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-indigo-500/20 transition-colors"
            aria-label="Hashnode"
          >
            <HashnodeIcon className="w-6 h-6 text-indigo-400" />
          </motion.a>
          <motion.a
            href="mailto:jaideep.jambhale@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-pink-500/20 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-pink-400" />
          </motion.a>
          <motion.a
            href="tel:+919653116810"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:bg-green-500/20 transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-6 h-6 text-green-400" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

