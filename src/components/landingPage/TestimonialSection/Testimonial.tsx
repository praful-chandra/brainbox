import React from "react";
import Pill from "../../ui/custom/Pill";
import { Button } from "../../ui/button";
import Image from "next/image";
import SingleTestimonial from "./SingleTestimonial";

type TestimonialSectionProps = {
  title: string;
  subHeading: string;
  pill: string;
};

const testimonialData: TestimonialDataType[] = [
  {
    author: "Emily Chang",
    text: "Using BrainBox has transformed how we manage our project documentation. It's intuitive, powerful, and has streamlined our workflow significantly. Highly recommended!",
    rating: 5,
    date: "2024-06-16",
  },
  {
    author: "Michael Patel",
    text: "BrainBox is a game-changer for our data management team. Its smart organization features have saved us countless hours and improved our data accuracy tremendously.",
    rating: 5,
    date: "2024-06-16",
  },
  {
    author: "Sarah Johnson",
    text: "As a researcher, BrainBox has been indispensable. Its collaboration tools and version control have made our team's work seamless and efficient.",
    rating: 4,
    date: "2024-06-16",
  },
  {
    author: "David Lee",
    text: "BrainBox simplifies project management like no other tool. It's easy to use yet incredibly powerful, making it a must-have for any tech team.",
    rating: 5,
    date: "2024-06-16",
  },
  {
    author: "Jessica Wong",
    text: "Our research team relies on BrainBox for its robust annotation and data visualization capabilities. It has enhanced our analysis processes and improved our project outcomes.",
    rating: 4,
    date: "2024-06-16",
  },
  {
    author: "Pmily Chang",
    text: "Using BrainBox has transformed how we manage our project documentation. It's intuitive, powerful, and has streamlined our workflow significantly. Highly recommended!",
    rating: 5,
    date: "2024-06-16",
  },
];

const TestimonialSection = () => {
  return (
    <div className="my-28 container flex flex-col gap-9  items-center justify-center text-center">
      <Pill label="Testimonials" />
      <h1 className="typo-mobile-h3 md:typo-mobile-h2 xl:typo-desktop-h2">
        Trusted by all
      </h1>
      <h5 className="typo-mobile-h5  xl:typo-desktop-h5 text-brand-secondary-200 w-3/4 md:w-2/4">
        Join thousands of satisfied users who rely on our platform for their
        personal and professional productivity needs.
      </h5>

      <div className="grid m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mt-32">
        {testimonialData.map((td) => (
          <SingleTestimonial testimonial={td} key={td.author} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
