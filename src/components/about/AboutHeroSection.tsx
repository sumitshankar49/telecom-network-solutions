"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function AboutHeroSection() {
  return (
    <motion.section 
      {...fadeInUp}
      className="bg-linear-to-br from-blue-50 to-indigo-100 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          About <span className="text-blue-600">DBP Solution</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We are a dedicated telecommunications solutions provider specializing in reliable connectivity, network infrastructure, and advanced communication services. Our team is committed to enabling businesses with secure, scalable, and high-performance telecom solutions that support growth and seamless digital communication.
        </p>
      </div>
    </motion.section>
  );
}
