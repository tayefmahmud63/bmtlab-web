import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { SquareActivity } from 'lucide-react';


interface HeroWithMockupProps {
  title: string
  description: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
    icon?: React.ReactNode
  }

  className?: string
}

export function HeroWithMockup({
  title,
  description,
  primaryCta = {
    text: "Get Started",
    href: "/get-started",
  },
  secondaryCta = {
    text: "Our Services",
    href: "/services",
    icon: <SquareActivity className="mr-2 h-4 w-4" />,
  },
  
  className,
}: HeroWithMockupProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "pt-12 px-4 md:pt-24 lg:pt-32 pb-0",
        "overflow-hidden",
        className,
      )}
    >
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 md:pt-16 text-center lg:gap-12">
          {/* Heading */}
          <h1
            className={cn(
              "inline-block animate-appear",
              "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
              "bg-clip-text text-transparent",
              "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
              "leading-[1.1] sm:leading-[1.1]",
              "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
            )}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "max-w-[550px] animate-appear opacity-0 [animation-delay:150ms]",
              "text-base sm:text-lg md:text-xl",
              "text-muted-foreground",
              "font-medium",
            )}
          >
            {description}
          </p>

          {/* CTAs */}
          <div
            className="relative z-10 flex flex-wrap justify-center gap-4 
            animate-appear opacity-0 [animation-delay:300ms]"
          >
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-gradient-to-b from-brand to-brand/90 dark:from-brand/90 dark:to-brand/80",
                "hover:from-brand/95 hover:to-brand/85 dark:hover:from-brand/80 dark:hover:to-brand/70",
                "text-white shadow-lg",
                "transition-all duration-300",
              )}
            >
              <a href={primaryCta.href}>{primaryCta.text}</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className={cn(
                "bg-accent text-accent-foreground",
                "hover:bg-accent hover:text-accent-foreground", 
                "transition-all duration-300",
              )}
            >
              <a href={secondaryCta.href}>
                {secondaryCta.icon}
                {secondaryCta.text}
              </a>
            </Button>
          </div>

  
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow
          variant="above"
          className="animate-appear-zoom opacity-0 [animation-delay:500ms]"
        />
      </div>
    </section>
  )
}
