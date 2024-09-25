import React from 'react';
import { Field, FieldSet, Input, TextArea } from '@elastiflow/epic-ui';
import { useFormContext } from 'react-hook-form';
import { StepForm } from '@site/src/components/templates/MultistepFormPage/Steps/StepForm';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';

export const GeneralInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <StepForm step={StepKey.Step1}>
      <FieldSet label={'1. General Information'}>
        <Field label={'Name'} required>
          <Input {...register('name')} />
        </Field>
        <Field label={'Email'} invalid={!!errors.email} error={errors.email?.message?.toString()}>
          <Input
            {...register('email', {
              validate: (value) => {
                // Do not validate empty email as it's not required
                if (!value) return true;
                return value.includes('@') || 'Enter a valid email';
              },
            })}
          />
        </Field>
        <Field label={'Message'}>
          <TextArea {...register('message')} />
        </Field>
      </FieldSet>
    </StepForm>
  );
};
