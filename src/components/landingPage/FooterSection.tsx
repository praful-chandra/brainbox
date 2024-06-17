import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const FooterSection = () => {
  return (
    <div
      className="w-full h-[65rem] relative"
      style={{ clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+65rem)] -top-[100vh]">
        <div className="sticky h-[65rem] top-[calc(100vh-65rem)] ">
          <div className="h-full w-full">
            <div className="w-full h-[60rem] bg-secondary relative">
              <Image
                src="/assets/common/logo-full-black.png"
                width={1000}
                height={0}
                alt="Brain Box logo"
                className="absolute bottom-0 w-[80rem]"
              />
            </div>
            <div className="w-full h-[5rem] bg-secondary flex items-center justify-center gap-5 text-brand-light typo-mobile-h5">
              <span>
                Developed by{" "}
                <Button variant="link" className="p-0 pb-1 text-brand-light">
                  Praful Chandra
                </Button>
              </span>
              <span>🇮🇳</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
