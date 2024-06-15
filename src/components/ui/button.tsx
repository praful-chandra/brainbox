import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md typo-desktop-p ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-secondary-500 text-brand-light hover:bg-brand-secondary-400 rounded-full",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-brand-secondary-300 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-brand-secondary-300  relative after:absolute after:bg-brand-secondary-300 after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
      },
      size: {
        default: "px-6 py-3.5",
        sm: "h-9 rounded-md px-3",
        lg: "rounded-full px-7 py-5 !typo-largeButton",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: string;
  rightIcon?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "flex items-center ",
            `${size === "lg" ? "gap-10" : "gap-4"}`
          )}
        >
          {leftIcon && (
            <Image
              src={`/assets/icons/${leftIcon}.svg`}
              width={size === "lg" ? 32 : 15}
              height={0}
              alt={leftIcon}
            />
          )}

          <Slottable>{props.children}</Slottable>
          {rightIcon && (
            <Image
              src={`/assets/icons/${rightIcon}.svg`}
              width={size === "lg" ? 32 : 15}
              height={0}
              alt={rightIcon}
            />
          )}
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
