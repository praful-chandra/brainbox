import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  required?: boolean;
  description?: string;
  type?: React.HTMLInputTypeAttribute;
};

const TextInput = ({
  name,
  label,
  required = false,
  description,
  type,
}: Props) => {
  const formMethods = useFormContext();
  return (
    <FormField
      control={formMethods.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="!typo-desktop-p text-secondary">
            {label}{' '}
            {required && <span className="text-brand-secondary-200">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type ?? 'text'}
              className="w-full !typo-textInput px-3 py-10 rounded-xl border-brand-secondary-300 bg-brand-light"
            />
          </FormControl>
          {description && (
            <FormDescription className="!typo-caption text-brand-secondary-300">
              {description}
            </FormDescription>
          )}
          <FormMessage className="!typo-caption" />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
