import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import LoginButtons from "@/components/common/LoginButtons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="w-[100%]
    flex
    items-center
    justify-center
    container
    py-10
  "
    >
      <Link href="/">
        <Image
          src="/assets/common/logo-full-black.png"
          width={200}
          height={0}
          alt="Brain Box"
          className="w-[19.7rem]"
        />
      </Link>
      <NavLinks />
      <LoginButtons />
    </nav>
  );
};

export default Navbar;
