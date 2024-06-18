'use server';

import { revalidatePath } from 'next/cache';
import { Redirect } from 'next';

import { createClient } from '@/lib/supabase/server';
import { LoginFormType } from '@/formData/loginFormData';
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
