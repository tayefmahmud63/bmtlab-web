import { HeroWithMockup } from "@/components/blocks/hero-with-mockup"
import { FloatingHeader } from "@/components/ui/floating-header" // or wherever it's installed
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import NewsletterForm from "@/components/ui/newsletter-form"
import Testimonials from "@/components/ui/testimonials-data";
import Blog7Demo from "@/components/blocks/blogs";
import About_us from "@/components/blocks/about-us";
import { Footer } from '@/components/blocks/footer-section';

export default function Home() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <FloatingHeader
        logo="Your Logo"
        links={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "/about_us", label: "About Us" },
          { href: "/blogs", label: "Blog" },
        ]}
        ctaButton={{
          href: "/contact",
          label: "Contact Us"
        }}
      />

      <HeroWithMockup
        title="Build AI-powered apps in minutes, not months"
        description="Create sophisticated AI applications with our intuitive platform. No ML expertise required."
        primaryCta={{
          text: "Start Building",
          href: "/signup",
        }}
        secondaryCta={{
          text: "View on GitHub",
          href: "https://github.com/your-ai-platform",
        }}
        mockupImage={{
          alt: "AI Platform Dashboard",
          width: 1248,
          height: 765,
          src: "https://www.launchuicomponents.com/app-light.png"
        }}
      />

      <BouncyCardsFeatures />

      <About_us />

      <NewsletterForm />

      <Testimonials />
      <Blog7Demo />
      <Footer />








    </>


  )
}