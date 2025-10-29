'use client';
import React from 'react';
import { ProcessSection } from '@/components/ui/how-we-do-it-process-overview';
import { Lightbulb, ChartGantt, Target, PenTool, Code, ShieldCheck, Megaphone } from 'lucide-react';

// Demo component to showcase the ProcessSection
const ProcessSectionDemo = () => {
  const processItems = [
  {
    icon: Lightbulb,
    title: 'Idea Generation',
    description: 'Identify healthcare needs',
  },
  {
    icon: ChartGantt,
    title: 'Resource Planning',
    description: 'Allocate time and tools',
  },
  {
    icon: PenTool,
    title: 'Interface Design',
    description: 'Build intuitive UIs',
  },
  {
    icon: Code,
    title: 'System Development',
    description: 'Develop apps and devices',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Testing',
    description: 'Ensure accuracy and reliability',
  },
  {
    icon: Megaphone,
    title: 'Product Deployment',
    description: 'Launch and monitor solutions',
  },
];


  return (
    <div className="w-full">
      <ProcessSection
        subtitle="Our Model"
        title="Work Process"
        description="At BMTech, We follow a typical matrix of time, effort, and resources, using Agile methodologies to deliver intelligent healthcare solutions efficiently."
        buttonText="Learn More"
        items={processItems}
      />
    </div>
  );
};

export default ProcessSectionDemo;