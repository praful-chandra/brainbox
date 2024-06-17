import Pill from "@/components/ui/custom/Pill";
import React from "react";
import PriceCard from "./PriceCard";

const PricingSection = () => {
  return (
    <>
      <div className="mt-[20vh] pb-20 container flex flex-col gap-9  items-center justify-center text-center">
        <Pill label="Pricing" />
        <h1 className="typo-desktop-h1">The Perfect Plan For YOu</h1>
        <h5 className="typo-desktop-h5 text-brand-secondary-200 w-2/4">
          Experience all the benefits of our platform. Select a plan that suits
          your needs and take your productivity to new heights.
        </h5>
        <div className="grid  grid-cols-2  gap-60 mt-32 ">
          <PriceCard type="free" />
          <PriceCard type="pro" />
        </div>
      </div>
      <div className="bg-secondary h-[20rem] w-full">
        <div className="bg-brand-light w-full h-full rounded-bl-section rounded-br-section" />
      </div>
    </>
  );
};

export default PricingSection;
