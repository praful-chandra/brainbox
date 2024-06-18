import Image from 'next/image';
import React from 'react';
import { TestimonialDataType } from './types';

type SingleTestimonialProps = {
  testimonial: TestimonialDataType;
};

const SingleTestimonial = ({ testimonial }: SingleTestimonialProps) => {
  return (
    <div
      className="rounded-xl border-brand-primary-600 bg-brand-primary-200 px-8 py-4
    flex flex-col items-start gap-5
    "
    >
      <div className="flex justify-center items-center gap-5">
        <Image
          src="/assets/landingAssets/person.jpg"
          width={50}
          height={50}
          alt="person"
          className="rounded-full aspect-square object-cover"
        />
        <span className="typo-desktop-p">{testimonial.author}</span>
      </div>
      <div className="text-left typo-caption text-brand-secondary-300">
        {testimonial.text}
      </div>
    </div>
  );
};

export default SingleTestimonial;
