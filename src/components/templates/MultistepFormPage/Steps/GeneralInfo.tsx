import React from 'react';
import { Field, FieldSet, Input, TextArea } from '@grafana/ui';
import { useFormContext } from 'react-hook-form';
import { StepForm } from '@site/src/components/templates/MultistepFormPage/Steps/StepForm';
import { StepKey } from '@site/src/components/templates/MultistepFormPage/types';

export const GeneralInfo = () => {
  const { register } = useFormContext();

  return (
    <StepForm step={StepKey.Step1}>
      <FieldSet label={'1. General Information'}>
        <Field label={'Name'} required>
          <Input {...register('name')} />
        </Field>
        <Field label={'Email'}>
          <Input {...register('email')} />
        </Field>
        <Field label={'Message'}>
          <TextArea {...register('message')} />
        </Field>
      </FieldSet>
    </StepForm>
  );
};
