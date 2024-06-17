import React from "react";
import TitleSection from "@/components/landingPage/TitleSection";
import FeatureSection from "@/components/landingPage/FeatureSection";
import InfoSection from "@/components/landingPage/InfoSection";
import PricingSection from "@/components/landingPage/pricingSection";
import TestimonialSection from "@/components/landingPage/TestimonialSection";
import FooterSection from "@/components/landingPage/FooterSection";

const HomePage = () => {
  return (
    <section className="mt-10 ">
      <TitleSection />
      <InfoSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <FooterSection />
    </section>
  );
};

export default HomePage;
