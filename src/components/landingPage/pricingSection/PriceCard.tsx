import LocalIcon from "@/components/common/LocalIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const freeCard = {
  title: "starter",
  subTitle: "Limited block trials for teams",
  price: "Free Forever",
  detailsTitle: "Starter Plan Includes :",
  details: [
    "Unlimited  blocks for teams",
    "30 day page history",
    "Unlimited  File Uploads",
    "2 guest invite only",
  ],
  ctaBtn: "Get Started",
};
const proCard = {
  title: "Pro Plan",
  subTitle: "Unlock full Brainbox capabilities",
  price: "Beta Preview",
  detailsTitle: "Everything in Starter +",
  details: [
    "Unlimited  blocks for teams",
    "30 day page history",
    "1 Year day page history",
    "up-to 10 guests invite",
  ],
  ctaBtn: "Request for a preview",
};

const PricingListSingle = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-2">
      <LocalIcon path="roundedCheck" width={17} />
      <p className="typo-desktop-p text-brand-secondary-300">{text}</p>
    </div>
  );
};

const PriceCard = ({ type }: { type: "free" | "pro" }) => {
  const currentCardDetails = type === "free" ? freeCard : proCard;
  return (
    <span className="relative">
      <div
        className={cn(
          " w-full h-full absolute z-[-1] blur-[60px] opacity-50",
          type === "pro" && "bg-primary"
        )}
      />

      <div
        className={cn(
          "bg-brand-light  border-2 rounded-3xl px-14 py-11 z-10",
          type === "free"
            ? "border-brand-secondary-50"
            : "border-brand-accent-500"
        )}
      >
        <div className="flex flex-col items-start gap-9">
          <div className="flex flex-col items-start gap-0">
            <h5 className="typo-desktop-h5">{currentCardDetails.title}</h5>
            <p className="typo-desktop-p text-brand-secondary-200">
              {currentCardDetails.subTitle}
            </p>
          </div>
          <h4 className="typo-desktop-h4">{currentCardDetails.price}</h4>
          <div className="flex flex-col items-start gap-3">
            <h5 className="typo-mobile-h5">
              {currentCardDetails.detailsTitle}
            </h5>
            <div className="flex flex-col gap-2">
              {currentCardDetails.details.map((d) => (
                <PricingListSingle key={d} text={d} />
              ))}
            </div>
          </div>

          <Button
            className={cn(
              "w-full mt-10",
              type === "pro" && "text-brand-accent-500"
            )}
          >
            {currentCardDetails.ctaBtn}
          </Button>
        </div>
      </div>
    </span>
  );
};

export default PriceCard;
