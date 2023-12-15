import React from 'react';
import { Button, Field, FieldSet, Input, Stack, TextArea } from '@grafana/ui';
import { useFormContext } from 'react-hook-form';

export const GeneralInfo = () => {
  const { register, handleSubmit } = useFormContext();
  const onSubmit = () => {
    window.location.hash = '#additional';
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Stack gap={2}>
        <Button type="submit">Next</Button>
      </Stack>
    </form>
  );
};
