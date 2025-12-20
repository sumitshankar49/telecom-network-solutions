"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export function TestimonialCard({
  name,
  company,
  role,
  content,
  rating,
  image
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full bg-gray-800 border-gray-700">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Quote Icon */}
          <Quote className="h-8 w-8 text-white/20 mb-4" />
          
          {/* Content */}
          <blockquote className="text-lg leading-relaxed mb-6 flex-1 text-white">
            &ldquo;{content}&rdquo;
          </blockquote>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center space-x-3">
            {image ? (
              <Image
                src={image}
                alt={`${name} - Customer testimonial`}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
                quality={90}
                sizes="48px"
              />
            ) : (
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="font-semibold text-white">{name}</p>
              <p className="text-sm text-gray-300">
                {role} at {company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}