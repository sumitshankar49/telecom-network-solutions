"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  pricing: string;
  popular?: boolean;
  onLearnMore?: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  pricing,
  popular = false,
  onLearnMore
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col ${popular ? 'ring-2 ring-primary' : ''}`}>
        {popular && (
          <div className="px-6 pt-6">
            <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
          </div>
        )}
        
        <CardHeader className={popular ? "pb-4" : ""}>
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
          </div>
          <CardDescription className="text-base mt-3">
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

          <div className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{pricing}</p>
            </div>
            <Button 
              className="w-full" 
              variant={popular ? "default" : "outline"}
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}