"use client";

import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/site-data";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
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

export default function ServicesPage() {
  const networkCoverage = [
    { region: "North America", coverage: "99.2%" },
    { region: "Europe", coverage: "98.8%" },
    { region: "Asia Pacific", coverage: "97.5%" },
    { region: "Latin America", coverage: "94.3%" },
    { region: "Middle East & Africa", coverage: "89.7%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section {...fadeInUp} className="bg-linear-to-brm-blue-50 via-teal-50 to-blue-100 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-200 text-sm md:text-base">
            Advanced Telecommunications
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Our <span className="text-blue-700">Telecom Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Comprehensive telecommunications solutions powered by cutting-edge technology. 
            From 5G networks to satellite communications, we connect your world seamlessly.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8">
              Get Connected Today
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Network Coverage Stats */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Global Network Coverage</h2>
            <p className="text-lg md:text-xl text-gray-600">Our infrastructure spans across continents</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-5 gap-6"
          >
            {networkCoverage.map((region, index) => (
              <motion.div key={index} variants={scaleIn} className="text-center">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-700 mb-2">{region.coverage}</div>
                  <div className="text-gray-700 font-medium">{region.region}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Telecommunications Solutions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Complete portfolio of services designed for the modern connected world
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  features={service.features}
                  pricing={service.pricing}
                  popular={service.popular}
                  onLearnMore={() => {}}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Standards */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industry Standards & Technologies</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We support all major telecommunications standards and emerging technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5G Standards</h3>
              <p className="text-gray-600 text-sm mb-3">3GPP Release 15/16/17</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs">eMBB</Badge>
                <Badge variant="outline" className="text-xs">URLLC</Badge>
                <Badge variant="outline" className="text-xs">mMTC</Badge>
              </div>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-xl border border-teal-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Protocols</h3>
              <p className="text-gray-600 text-sm mb-3">Low Power Wide Area Networks</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs">LoRaWAN</Badge>
                <Badge variant="outline" className="text-xs">NB-IoT</Badge>
                <Badge variant="outline" className="text-xs">Sigfox</Badge>
              </div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satellite Tech</h3>
              <p className="text-gray-600 text-sm mb-3">Next-gen satellite systems</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs">LEO</Badge>
                <Badge variant="outline" className="text-xs">MEO</Badge>
                <Badge variant="outline" className="text-xs">GEO</Badge>
              </div>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-xl border border-teal-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Native</h3>
              <p className="text-gray-600 text-sm mb-3">Modern network functions</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs">NFV</Badge>
                <Badge variant="outline" className="text-xs">SDN</Badge>
                <Badge variant="outline" className="text-xs">CNF</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for successful telecom infrastructure deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
              <p className="text-gray-600">
                Comprehensive network analysis, coverage planning, and technology roadmap development.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Engineering</h3>
              <p className="text-gray-600">
                Detailed network design, equipment selection, and integration planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Testing</h3>
              <p className="text-gray-600">
                Professional installation, configuration, and comprehensive testing procedures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization & Support</h3>
              <p className="text-gray-600">
                Ongoing monitoring, optimization, and 24/7 technical support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-700 via-blue-800 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our telecommunications solutions can enhance your connectivity and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Get Connected Today
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}