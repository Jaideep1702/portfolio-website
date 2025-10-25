"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star } from "lucide-react";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Innovation Catalyst – Netcore",
      date: "Apr 2025",
      description:
        "Recognized for MCP exploration & data generation module",
      icon: Trophy,
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Quick Learner – Netcore",
      date: "Mar & Jul 2025",
      description:
        "Awarded for report data masking & Vertica query optimization",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Runner-up – Hackformers Hackathon",
      date: "Mar 2023",
      description: "NFT-based blockchain gaming app",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Celebrating achievements and milestones in my professional journey
            </p>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${award.color} mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Date Badge */}
                    <div className="inline-block px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 mb-3">
                      {award.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Recognition */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center glass rounded-2xl p-8"
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  3+
                </div>
                <div className="text-gray-400">Awards Received</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">1</div>
                <div className="text-gray-400">Hackathon Runner-Up</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  2+
                </div>
                <div className="text-gray-400">Company Recognitions</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;

