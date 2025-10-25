"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Cloud,
  BarChart3,
  Layers,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: ["Go", "Java", "Python", "C/C++", "Solidity", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Spring Boot",
        "Gin",
        "Express",
        "Django",
        "gRPC",
        "LangChain",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "Git"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: ["Vertica", "MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Analytics",
      icon: BarChart3,
      color: "from-yellow-500 to-amber-500",
      skills: [
        "Kibana",
        "Grafana",
        "OpenTelemetry (OTel)",
        "Pandas",
        "NumPy",
        "Seaborn",
      ],
    },
    {
      title: "Soft Skills",
      icon: Sparkles,
      color: "from-indigo-500 to-violet-500",
      skills: [
        "Communication",
        "Problem Solving",
        "Leadership",
        "Teamwork",
        "Data Analysis",
        "Project Management",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and
              continuous learning
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass rounded-2xl p-6 hover:bg-slate-800/30 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}
                    >
                      <Icon className={`w-6 h-6 text-white`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          delay: index * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="px-3 py-1 bg-slate-800/50 rounded-full text-sm text-gray-300 hover:bg-slate-700/50 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    University of Mumbai
                  </h4>
                  <p className="text-purple-400 font-medium">
                    B.E. Information Technology & Hons. Blockchain
                  </p>
                  <p className="text-gray-400 mt-1">
                    SAKEC/CGPIT (Cumulative GPA: 9.3/10)
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-300 font-medium">
                    Mumbai, Maharashtra
                  </p>
                  <p className="text-gray-400">(August 2020 - June 2024)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

