import React from "react";
import Pill from "../ui/custom/Pill";
import { Button } from "../ui/button";
import Image from "next/image";

type FeatureSectionProps = {
  title: string;
  subHeading: string;
  pill: string;
};

const FeatureSection = () => {
  return (
    <div className="mt-28 container flex flex-col gap-9  items-center justify-center text-center">
      <Pill label="Features" />
      <h1 className="typo-desktop-h1">
        Organize all of your meetings conveniently in one centralized location.
      </h1>
      <h5 className="typo-desktop-h5 text-brand-secondary-200 w-2/4">
        Capture your ideas, thoughts, and meeting notes in a structured and
        organized manner.
      </h5>

      <Image
        src="/assets/landingAssets/callenderHero.png"
        width={1500}
        height={0}
        alt="Brain Box Callender Preview"
        className="w-2/4"
      />
    </div>
  );
};

export default FeatureSection;
