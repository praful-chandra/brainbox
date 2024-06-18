import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('Email is not Valid').min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

export const loginFormResolvedSchema = zodResolver(loginFormSchema);

export type LoginFormType = z.infer<typeof loginFormSchema>;
