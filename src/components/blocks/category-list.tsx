"use client";
import React from 'react';
import { CategoryList, Category } from '@/components/ui/category-list';
import {  Bot, Code, Palette, ArrowRight, Watch } from 'lucide-react';

const sampleCategories: Category[] = [
  {
    id: 1,
    title: 'Telemedicine Platforms',
    subtitle: 'Seamless online doctor-patient connections.',
    onClick: () => alert('Navigating to Featured Project...'),
    icon: <ArrowRight className="w-8 h-8" />,
    featured: true, // This item will have a larger title
  },
  {
    id: 2,
    title: 'mHealth Apps',
    subtitle: 'Smart mobile solutions for health tracking and engagement.',
      onClick: () => alert('Navigating to AI...'),
      icon: <Code className="w-8 h-8" />,
    
  },
  {
    id: 3,
    title: 'IoT Healthcare Wearables',
    subtitle: 'Real-time patient monitoring devices',
    onClick: () => alert('Navigating to Design...'),
    icon: <Watch className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Patient Monitoring Robots',
    subtitle: 'Autonomous systems to assist in care delivery.',
    onClick: () => alert('Navigating to Dev Kits...'),

    icon: <Bot className="w-8 h-8" />,
  },
];


const CategoryListDemo = () => {
  return (
    <div className="w-full bg-background mt-20">
      <CategoryList
        title="Our Innovative"
        subtitle="Solutions"
        categories={sampleCategories}
        
      />
    </div>
  );
};

export default CategoryListDemo;