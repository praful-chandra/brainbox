'use client';

import { Form } from '@/components/ui/form';
import {
  LoginFormType,
  loginFormResolvedSchema,
} from '@/formData/loginFormData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import LoginForm from './LoginForm';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  const loginFormMethods = useForm<LoginFormType>({
    resolver: loginFormResolvedSchema,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
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
          <h5 className="typo-desktop-h5">Login to BrainBox</h5>
        </div>
        <LoginForm loginFormMethods={loginFormMethods} />
        <div className="border-b-brand-secondary-100 border-b w-full h-px" />

        <div className="flex flex-col gap-1">
          <p className="typo-desktop-p">
            Dont have an account ? <Button variant="link">Sign Up</Button>
          </p>
          <Button variant="link">Forgot Password?</Button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
