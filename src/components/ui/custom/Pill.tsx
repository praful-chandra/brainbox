import React from "react";
import Image from "next/image";

type PillProps = {
  label: string;
  leftIcon?: string;
  rightIcon?: string;
};

const Pill = ({ label, leftIcon, rightIcon }: PillProps) => {
  return (
    <div
      className="border rounded-full text-brand-secondary-500 p-px typo-desktop-p
    bg-gradient-to-r from-brand-fill-500 to-brand-dark
    "
    >
      <div className="px-4 py-2 h-full w-full bg-brand-light rounded-full">
        <div className="flex gap-6">
          {leftIcon && (
            <Image
              src={`/assets/icons/${leftIcon}.svg`}
              width={20}
              height={0}
              alt={leftIcon}
            />
          )}
          {label}
          {rightIcon && (
            <Image
              src={`/assets/icons/${rightIcon}.svg`}
              width={20}
              height={0}
              alt={rightIcon}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pill;
