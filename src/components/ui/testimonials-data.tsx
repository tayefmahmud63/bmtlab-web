"use client"
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The BurnFlow app completely streamlined our burn patient care. It’s intuitive and truly saves time in clinical settings.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Shabit",
    role: "Clinical Manager",
  },
  {
    text: "BMTech’s BMI calculator is simple yet powerful. It helps our staff make quick assessments accurately.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Forhad",
    role: "Healthcare Administrator",
  },
  {
    text: "The mHealth clinical decision support system has revolutionized our patient management. Insights are instant and reliable.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Rohan",
    role: "Medical Director",
  },
  {
    text: "NeuroTrack’s smartwatch monitoring has been a breakthrough for detecting tremors early. It’s precise and easy to use.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Taib",
    role: "Neurology Specialist",
  },
  {
    text: "From wearable integration to real-time alerts, BMTech’s solutions have significantly improved our workflow efficiency.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Joy",
    role: "Operations Lead",
  },
  {
    text: "Their apps and devices make healthcare smarter. We now provide better patient care with less manual effort.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Zawad",
    role: "Healthcare IT Manager",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;