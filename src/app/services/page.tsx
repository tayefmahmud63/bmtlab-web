import { FloatingHeader } from "@/components/ui/floating-header" // or wherever it's installed
import Testimonials from "@/components/ui/testimonials-data";
import Blog7Demo from "@/components/blocks/blogs";
import About_us from "@/components/blocks/about-us";
import { Footer } from '@/components/blocks/footer-section';
import { Hero } from "@/components/ui/animated-hero"
import FeaturesGrid from "@/components/ui/grid-feature"
import ProcessSectionDemo from "@/components/blocks/process";
import { CTA_Section } from "@/components/blocks/cta";
import { HeroWithMockup } from "@/components/blocks/hero-with-mockup"
import { MoveUpRight } from 'lucide-react';
import CategoryListDemo from "@/components/blocks/category-list";




export default function Home() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <FloatingHeader />
           <HeroWithMockup
        title="Transform Healthcare with Smart Technology"
        description="From AI powered apps to intelligent devices, we create solutions that make care faster, smarter and more accessible."
        primaryCta={{
          text: "Book a call",
          href: "/contact",
        }}
        secondaryCta={{
          text: "About us",
          href: "/about_us",
          icon: <MoveUpRight className="mr-2 h-4 w-4" />,
        }}
   
      />
      <CategoryListDemo />
      <ProcessSectionDemo />
      <Testimonials />
      <CTA_Section />
      
      
      <Footer />

    </>


  )
}