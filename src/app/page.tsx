"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Award, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { companyInfo, services, testimonials } from "@/data/site-data";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/max-iGsjSLxnAe8-unsplash.jpg"
            alt="DBP Solutions Background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-gray-900 shadow-xl">
                <Zap className="w-4 h-4 mr-2 text-blue-600" />
                {companyInfo.tagline}
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.9)' }}
            >
              <span className="text-white">DPB</span>{" "}
              <span className="text-blue-500">Solution</span>{" "}
              <span className="block mt-2 text-white">Transform Your Operations.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
              style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.9)' }}
            >
              {companyInfo.description}
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 shadow-2xl" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white hover:bg-gray-100 text-gray-900 border-2 border-white shadow-2xl" asChild>
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-6 px-8 border border-white/20 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                  {companyInfo.clients}
                </div>
                <div className="text-sm md:text-base text-white font-semibold leading-tight" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                  Happy Clients
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-6 px-8 border border-white/20 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                  {companyInfo.employees}
                </div>
                <div className="text-sm md:text-base text-white font-semibold leading-tight" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                  Team Members
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-6 px-8 border border-white/20 flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                  Multiple Cities in India
                </div>
                <div className="text-sm md:text-base text-white font-semibold leading-tight" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                  Countries Served
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-6 px-8 border border-white/20 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                  15+
                </div>
                <div className="text-sm md:text-base text-white font-semibold leading-tight" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose DPB Solution?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We combine cutting-edge technology with expert service delivery to provide 
                solutions that drive real business results.
              </p>
              
              <div className="space-y-4">
                {[
                  "24/7 Expert Support & Monitoring",
                  "Enterprise-Grade Security & Compliance", 
                  "Scalable Solutions for Any Business Size",
                  "Proven Track Record Since 2009"
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-6"
            >
              <motion.div variants={scaleIn} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Expert Team</div>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">99.99%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime SLA</div>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-400">Countries</div>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <Zap className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1200+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={scaleIn}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-modern-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join over 1,200 businesses that trust DPB Solution for their IT and telecommunications needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-violet-600" asChild>
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}