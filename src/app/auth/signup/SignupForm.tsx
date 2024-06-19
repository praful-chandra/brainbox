import { TextInput } from '@/components/common/formFields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { SignupFormType } from '@/formData/authFormData';
import { signupAction } from '@/serverActions/AuthActions';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

type SignupFormProps = {
  signupFormMethods: UseFormReturn<SignupFormType>;
};

const LoginForm = ({ signupFormMethods }: SignupFormProps) => {
  const handleFormSubmit = async (vals: SignupFormType) => {
    return signupAction(vals);
  };

  return (
    <Form {...signupFormMethods}>
      <form
        className="w-full"
        onSubmit={signupFormMethods.handleSubmit(handleFormSubmit)}
      >
        <article className="flex flex-col gap-7">
          <TextInput name="email" label="Email" type="email" required />
          <TextInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <TextInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required
          />
          <Button
            type="submit"
            disabled={signupFormMethods.formState.isSubmitting}
          >
            Create Account
          </Button>
        </article>
      </form>
    </Form>
  );
};

export default LoginForm;
