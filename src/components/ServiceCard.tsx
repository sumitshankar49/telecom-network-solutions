import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  href?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  href = "/contact" 
}: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-gray-200">
      <CardHeader>
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-blue-700" />
          </div>
        </div>
        <CardTitle className="text-xl font-semibold text-gray-900">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 shrink-0"></div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Link href={href} className="w-full">
          <Button 
            variant="outline" 
            className="w-full group border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-200"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}