"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { y: 50, opacity: 0 },
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 via-golden-500 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-500 via-golden-500 to-orange-600 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full glass rounded-3xl overflow-hidden border-2 border-saffron-500/30 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Jaideep Jambhale"
                  fill
                  className="object-cover object-[center_25%]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                  {/* Overlay gradient for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-golden-500 to-saffron-500 rounded-full blur-2xl opacity-50 animate-pulse animation-delay-1000"></div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-saffron-400" />
                  <span className="text-lg">Navi Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase className="w-5 h-5 text-golden-500" />
                  <span className="text-lg">
                    Software Engineer at Netcore Cloud
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-orange-400" />
                  <span className="text-lg">
                    B.E. Information Technology - University of Mumbai
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I&apos;m a passionate Software Engineer with expertise in
                  building scalable solutions and delivering impactful results.
                  Currently working at <span className="text-saffron-400 font-semibold">Netcore Cloud</span>,
                  where I lead the development of analytics platforms and
                  caching systems.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  My journey in tech has been driven by a love for{" "}
                  <span className="text-golden-500 font-semibold">
                    problem-solving
                  </span>{" "}
                  and{" "}
                  <span className="text-orange-400 font-semibold">
                    innovation
                  </span>
                  . From developing real-time alerting systems to building
                  Python modules for test data generation, I thrive on
                  challenges that push the boundaries of what&apos;s possible.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring
                  emerging technologies, participating in hackathons, or
                  contributing to open-source projects.
                </p>
              </div>

              {/* Quick Stats */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-3 gap-4 pt-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-gray-400 text-sm mt-1">Years Exp.</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-gray-400 text-sm mt-1">Projects</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className="text-gray-400 text-sm mt-1">Awards</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

