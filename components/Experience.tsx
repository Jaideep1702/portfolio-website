"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const experiences = [
    {
      company: "Netcore Cloud",
      role: "Software Engineer",
      location: "Mumbai, Maharashtra",
      period: "June 2024 – Present",
      summary: "Contributing to Analytics 2.0 platform development with comprehensive features including funnel analysis, cohort tracking, and RFM analytics. Developed cache optimization solutions and data generation tools using Spring Boot and Go frameworks.",
      highlights: [
        "Analytics 2.0 - Funnel, Cohort, RFM & Trends",
        "Cache System POC - 40% faster responses",
        "Attribute Masking - RBAC compliance",
        "SLACK Alerting - Real-time monitoring",
        "Python Test Data Generator",
      ],
      achievements: [
        "Spearheaded Analytics 2.0 development: funnel, cohort, RFM, and trends analytics. Built scalable features using Spring Boot, optimized queries, conducted POC benchmarking.",
        "Developed attribute masking for all downloadable reports ensuring RBAC security compliance.",
        "Evaluated and delivered complete Autosuggest service using Go Gin framework in one week, improving response times by ~40%.",
        "Increased test coverage for Maven Lambda services, improving system maintainability.",
        "Designed Slack-based alerting system to detect UI/DB discrepancies >5%.",
        "Built Python module for generating synthetic test data with complex relationships.",
      ],
    },
    {
      company: "Winsoft Technologies",
      role: "Project Trainee",
      location: "Mumbai, Maharashtra",
      period: "June 2022 – July 2022",
      summary: "Worked on BFSI domain projects, gaining practical experience in Spring Boot framework development with Core Java and SQL database operations including query optimization and data export functionalities.",
      highlights: [
        "Spring Boot Framework",
        "PostgreSQL Query Development",
        "CSV Export Implementation",
      ],
      achievements: [
        "Gained hands-on experience with Core Java and SQL through live BFSI domain projects.",
        "Developed backend components for PostgreSQL querying, HashMap storage, and CSV export functionality.",
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 via-golden-500 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-saffron-500/20 hover:border-saffron-500/50">
                    {/* Company Header */}
                    <div className="mb-4 pb-4 border-b border-gray-700">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-saffron-500 to-orange-600">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {exp.company}
                            </h3>
                            <p className="text-saffron-400 font-semibold">
                              {exp.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saffron-500 to-golden-500"></span>
                          <span className="text-gray-300">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-saffron-500/10 to-orange-500/10 hover:from-saffron-500/20 hover:to-orange-500/20 border border-saffron-500/30 text-saffron-400 font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gray-700 space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 text-sm"
                              >
                                <span className="text-golden-500 mt-1 flex-shrink-0 font-bold">
                                  ➤
                                </span>
                                <span className="text-gray-300 leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-tl-2xl rounded-br-2xl opacity-50"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

