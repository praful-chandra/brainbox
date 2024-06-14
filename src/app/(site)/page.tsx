import React from "react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <section>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center bg-dark-10">
        <Button>Hello</Button>
      </div>
    </section>
  );
};

export default HomePage;
