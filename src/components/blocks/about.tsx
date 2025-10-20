"use client";
import { AnimatePathSvg } from "@/components/ui/svg-path-draw";
import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Award, Target, Users } from "lucide-react";
import { useRef } from "react";

export default function AboutSection4() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  return (
    <section className="py-20 px-4 overflow-x-hidden" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <TimelineContent
              as="div"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-sm inline-block mb-6"
            >
              Our Story
            </TimelineContent>
            <h1 className="sm:text-4xl text-3xl md:text-5xl font-semibold text-gray-900 mb-6 !leading-[120%]">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 40,
                  delay: 0.4,
                }}
              >
                Building Tomorrow's Solutions Today
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="p"
              animationNum={1}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              We're a team of innovators, dreamers, and problem-solvers
              dedicated to creating technology that makes a meaningful impact on
              people's lives.
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid grid-cols-3 gap-6 mb-8 bg-neutral-50 border border-neutral-100 rounded-xl p-2"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-blue-200 border border-blue-200">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="sm:text-2xl text-xl font-semibold text-gray-900">
                  50+
                </div>
                <div className="sm:text-sm text-xs text-gray-600">
                  Team Members
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-green-300 border border-green-200">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="sm:text-2xl text-xl font-semibold text-gray-900">
                  15+
                </div>
                <div className="sm:text-sm text-xs text-gray-600">
                  Awards Won
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-purple-200 border border-purple-200">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div className="sm:text-2xl text-xl font-semibold text-gray-900">
                  200+
                </div>
                <div className="sm:text-sm text-xs text-gray-600">
                  Projects Done
                </div>
              </div>
            </TimelineContent>

            <div className="flex gap-2">
              <TimelineContent
                as="button"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-gradient-to-t to-blue-400 from-blue-600 shadow-md shadow-blue-600 hover:bg-blue-700 text-white sm:text-base text-sm sm:px-8 px-4  py-3 rounded-lg inline-flex items-center cursor-pointer transition-colors group w-full font-medium justify-center"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </TimelineContent>
              <TimelineContent
                as="button"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-gradient-to-t to-green-400 from-green-600 shadow-md shadow-green-600 hover:bg-green-700 text-white sm:text-base text-sm sm:px-8 px-4  py-3 rounded-lg inline-flex items-center cursor-pointer transition-colors group w-full justify-center font-medium uppercase"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </TimelineContent>
            </div>
          </div>
          <div className="relative z-10 h-full p-2 bg-gradient-to-t from-gray-200 rounded-2xl">
            <TimelineContent
              as="img"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team collaboration"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-2xl h-full"
            />
            <AnimatePathSvg
              width="100%"
              height="100%"
              viewBox="0 0 225 43"
              className="w-52 h-10 absolute -right-20 -rotate-12"
              path="M222.462 12.8345C177.074 10.0328 132.077 4.80881 86.6062 3.64623C60.4691 2.97796 -17.6945 1.02174 8.17755 4.79475C50.7028 10.9964 94.6534 10.7971 137.47 14.9675C154.059 16.5834 170.516 18.7493 187.021 21.0384C193.373 21.9193 198.334 23.4078 188.17 22.8432C142.806 20.323 97.6784 14.7225 52.3141 12.0141C47.4732 11.7251 33.1304 11.5843 37.7934 12.9165C54.8856 17.8 73.2224 19.7239 90.7081 22.433C111.764 25.6952 133.161 27.7326 154.042 32.0315C161.542 33.5757 171.588 34.0575 178.571 37.1999C190.929 42.7607 151.511 39.3406 137.962 39.0868C115.414 38.6643 92.8916 37.3627 70.3626 36.4616"
              strokeColor="#090909"
              strokeWidth={3}
              strokeLinecap="round"
              animationDuration={1.5}
              animationDelay={0}
              animationBounce={0.3}
              reverseAnimation={true}
              enableHoverAnimation={true}
              hoverAnimationType="redraw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
