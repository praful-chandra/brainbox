'use client';

import { Form } from '@/components/ui/form';
import {
  SignupFormType,
  signupFormResolvedSchema,
} from '@/formData/authFormData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import SignupForm from './SignupForm';
import { Button } from '@/components/ui/button';

const SignupPage = () => {
  const signupFormMethods = useForm<SignupFormType>({
    resolver: signupFormResolvedSchema,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <section className="w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-10">
      <div className="flex items-center justify-center flex-col gap-10 w-[90vw] max-w-[40rem]">
        <div className="flex items-center justify-center flex-col gap-5">
          <Link href="/">
            <Image
              src="/assets/common/logo-icon-small.png"
              width={150}
              height={0}
              alt="BrainBox logo"
              className="w-[7rem]"
            />
          </Link>
          <h5 className="typo-desktop-h5">Join BrainBox</h5>
        </div>
        <SignupForm signupFormMethods={signupFormMethods} />
        <div className="border-b-brand-secondary-100 border-b w-full h-px" />

        <div className="flex flex-col gap-1">
          <p className="typo-desktop-p">
            Already have an account?{' '}
            <Link href="/auth/login">
              <Button variant="link">Sign Up</Button>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
