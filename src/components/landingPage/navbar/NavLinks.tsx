import path from "path";
import { navLinks } from "./navConfig";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NavLinks = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn(
        className,
        `flex-auto hidden md:flex items-center justify-center  gap-5`
      )}
    >
      {navLinks.map((nl) => (
        <li key={nl?.path}>
          <Button variant="link">
            <Link href={`/#${nl.path}`}>{nl.label}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
