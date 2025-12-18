"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site-data";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT and telecommunications solutions designed to power your business forward
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={scaleIn}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                features={service.features}
                pricing={service.pricing}
                popular={service.popular}
                onLearnMore={() => window.location.href = '/services'}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          {...fadeInUp}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
