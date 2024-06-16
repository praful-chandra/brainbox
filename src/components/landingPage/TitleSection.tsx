import React from "react";
import Pill from "../ui/custom/Pill";
import { Button } from "../ui/button";
import Image from "next/image";

type TitleSectionProps = {
  title: string;
  subHeading: string;
  pill: string;
};

const TitleSection = () => {
  return (
    <div className="container flex flex-col gap-9  items-center justify-center">
      <Pill label="Elevate Your Workspace Experience" leftIcon="rocket" />
      <h1 className="typo-desktop-h1">Maximize Efficiency Minimize Hassle</h1>
      <h5 className="typo-desktop-h5 text-brand-secondary-200">
        Your All-in-One Workspace Solution
      </h5>
      <Button size="lg" rightIcon="filledRightArrow">
        Get BrainBox Free
      </Button>

      <Image
        src="/assets/landingAssets/brainboxHeroImage.png"
        width={1500}
        height={0}
        alt="Brain Box Preview"
        className="w-full"
      />
    </div>
  );
};

export default TitleSection;
