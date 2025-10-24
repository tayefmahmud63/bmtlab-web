import { Cta4 } from "@/components/ui/cta-4";

const CTA_Section = () => {
  return (
    <Cta4
      title="Ready to Transform Healthcare?"
      description="Start building mHealth apps and smart medical IoT machines today fast, easy and impactful."
      buttonText="Book a call"
      buttonUrl="/contact"
      items={[
        "Telemedicine Ready",
        "mHealth Solutions",
        "Wearable Integration",
        "Custom Workflows",
        "Reliable Performance"
      ]}
    />
  );
};

export { CTA_Section};
