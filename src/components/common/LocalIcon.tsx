import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type LocalIconProps = {
  path: string;
  width?: number;
  height?: number;
  className?: string;
};

const LocalIcon = ({
  path,
  width = 25,
  height = 0,
  className,
}: LocalIconProps) => {
  return (
    <Image
      src={`/assets/icons/${path}.svg`}
      alt={path}
      width={width}
      height={height}
      className={cn(className)}
    />
  );
};

export default LocalIcon;
