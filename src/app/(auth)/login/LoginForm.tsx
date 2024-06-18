import { TextInput } from '@/components/common/formFields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { LoginFormType } from '@/formData/loginFormData';
import { loginAction } from '@/serverActions/authActions';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

type LoginFormProps = {
  loginFormMethods: UseFormReturn<LoginFormType>;
};

const LoginForm = ({ loginFormMethods }: LoginFormProps) => {
  const handleFormSubmit = async (vals: LoginFormType) => {
    return loginAction(vals);
  };

  return (
    <Form {...loginFormMethods}>
      <form
        className="w-full"
        onSubmit={loginFormMethods.handleSubmit(handleFormSubmit)}
      >
        <article className="flex flex-col gap-7">
          <TextInput name="email" label="Email" type="email" required />
          <TextInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <Button
            type="submit"
            disabled={loginFormMethods.formState.isSubmitting}
          >
            Sign In
          </Button>
        </article>
      </form>
    </Form>
  );
};

export default LoginForm;
