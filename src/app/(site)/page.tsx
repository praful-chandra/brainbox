import React from "react";
import TitleSection from "@/components/landingPage/TitleSection";
import FeatureSection from "@/components/landingPage/FeatureSection";
import InfoSection from "@/components/landingPage/InfoSection";
import TestimonialSection from "@/components/landingPage/TestimonialSection";

const HomePage = () => {
  return (
    <section className="mt-10 ">
      <TitleSection />
      <InfoSection />
      <FeatureSection />
      <TestimonialSection />
    </section>
  );
};

export default HomePage;
