'use server';

import { revalidatePath } from 'next/cache';
import { Redirect } from 'next';

import { createClient } from '@/lib/supabase/server';
import { LoginFormType, SignupFormType } from '@/formData/authFormData';
import { redirect } from 'next/dist/server/api-utils';

export async function loginAction(formData: LoginFormType) {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(formData);

  if (error) {
    console.log('LOGIN ERRROR', error);
    return;
  }

  console.log('LOGIN SUCCESS');
}

export async function signupAction(formData: SignupFormType) {
  const supabase = createClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log('Signup ERRROR', error);
    return;
  }

  console.log('SIGNUP SUCCESS');
}
