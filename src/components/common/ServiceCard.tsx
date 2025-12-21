"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
  onLearnMore?: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  popular = false,
  onLearnMore
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full perspective-1000"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="h-full"
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card className={`h-full flex flex-col backdrop-blur-sm bg-white/95 hover:shadow-2xl transition-all duration-300 ${
          popular ? 'ring-2 ring-blue-500 shadow-blue-200/50' : 'hover:ring-2 hover:ring-blue-300'
        }`}>
       
          
          <CardHeader className={popular ? "pb-4" : ""}>
            <div className="flex items-center space-x-3">
              <motion.div 
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg"
                animate={{
                  rotate: isHovered ? [0, -10, 10, 0] : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
              <div className="flex-1">
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-base mt-3 text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1">
            <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Button 
              className="w-full border-2" 
              variant={popular ? "default" : "outline"}
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
      </motion.div>
    </motion.div>
  );
}