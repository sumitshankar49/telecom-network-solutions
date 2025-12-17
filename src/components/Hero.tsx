import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, Radio, Wifi, Satellite, Network } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-50 via-teal-50 to-blue-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-700">Connecting the Future</span>
            <br />
            <span className="text-teal-600">with Advanced Telecom</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience next-generation telecommunications with 5G networks, 
            IoT solutions, and seamless global connectivity that powers your digital world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3">
                Get Connected Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-3">
                Explore Our Network
              </Button>
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 animate-pulse-network">
                <Radio className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5G Networks</h3>
              <p className="text-gray-600">
                Ultra-fast 5G connectivity for lightning-speed data transmission.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-4 animate-pulse-network animation-delay-2000">
                <Wifi className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Solutions</h3>
              <p className="text-gray-600">
                Smart device connectivity for the Internet of Things ecosystem.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 animate-pulse-network animation-delay-4000">
                <Satellite className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satellite Comm</h3>
              <p className="text-gray-600">
                Global satellite communication for remote and maritime connectivity.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-4 animate-pulse-network">
                <Network className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Infrastructure</h3>
              <p className="text-gray-600">
                Robust network infrastructure solutions for enterprise and carrier needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations with Telecom Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor"/>
                <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" className="text-blue-600"/>
          </svg>
        </div>
      </div>
    </section>
  );
}